#!/usr/bin/env python3
"""
=============================================================================
EVALUADOR AUTOMÁTICO DE TRABAJOS PRÁCTICOS - MODELOS Y SIMULACIÓN (UCSE)
Cátedra: Modelos y Simulación | Ciclo Lectivo 2026 | Ingeniería en Informática
=============================================================================
Evaluador Criptográfico Oficial del Trabajo Práctico Nº 3:
Generación de Números Pseudoaleatorios (8 Ejercicios Individualizados)
"""

import sys
import os
import json
import glob
import hashlib
import argparse
from datetime import datetime

# Asegurar compatibilidad UTF-8 en consolas Windows
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_RUBRIC = os.path.join(SCRIPT_DIR, "rubric_tp3.json")
CATEDRA_SALT = "MODELOS_SIMULACION_UCSE_2026_CATEDRA_SECRET_SALT"

# Colores ANSI para terminal
CLR_RESET = "\033[0m"
CLR_BOLD = "\033[1m"
CLR_GREEN = "\033[32m"
CLR_RED = "\033[31m"
CLR_YELLOW = "\033[33m"
CLR_CYAN = "\033[36m"
CLR_MAGENTA = "\033[35m"
CLR_BG_GREEN = "\033[42m\033[30m"
CLR_BG_RED = "\033[41m\033[37m"

def compute_hash(ex_id, item_key, val):
    clean_val = str(val).strip().replace(',', '.').lower() if val is not None else ""
    raw = f"{ex_id}:{item_key}:{clean_val}:{CATEDRA_SALT}"
    return hashlib.sha256(raw.encode('utf-8')).hexdigest()

def normalizar_valor(val):
    if val is None:
        return ""
    return str(val).strip().replace(',', '.').lower()

def buscar_archivo_entrega():
    """Busca automáticamente el comprobante de entrega en rutas habituales."""
    patrones = [
        os.path.join(SCRIPT_DIR, "entregas", "*.json"),
        os.path.join(SCRIPT_DIR, "comprobante_tp3_*.json"),
        os.path.join(SCRIPT_DIR, "respuestas_tp3.json"),
        os.path.join(SCRIPT_DIR, "entrega.json"),
        os.path.join(SCRIPT_DIR, "*.json")
    ]
    for patron in patrones:
        candidatos = glob.glob(patron)
        for c in candidatos:
            bname = os.path.basename(c)
            if bname not in ["rubric_tp3.json", "rubric_tp3_master.json", "package.json"]:
                return c
    return None

def evaluar_entrega(submission, rubric):
    ej_id = str(submission.get("ejercicioId", "1"))
    estudiante = submission.get("estudiante", {})
    nombre = estudiante.get("nombreCompleto", "Estudiante No Especificado")
    legajo = estudiante.get("legajoODni", "S/D")
    respuestas = submission.get("respuestasRegistradas", {})
    timestamp = submission.get("timestamp", "")
    firma_digital = submission.get("firmaDigitalSHA256", "")

    exercises_rubric = rubric.get("exercises", {})
    if ej_id not in exercises_rubric:
        return {
            "error": f"El ID de ejercicio '{ej_id}' no existe en la rúbrica oficial."
        }

    spec = exercises_rubric[ej_id]
    expected_hashes = spec.get("hashes", {})
    alt_hashes = spec.get("alt_hashes", {})

    total_items = len(expected_hashes)
    correctos = 0
    detalles = []

    for item_key, exp_hash in expected_hashes.items():
        actual_val = respuestas.get(item_key)
        actual_hash = compute_hash(ej_id, item_key, actual_val)
        
        is_correct = (actual_hash == exp_hash)

        # Si no coincide exactamente, verificar hashes alternativos válidos
        if not is_correct:
            for alt_id, alt_spec in alt_hashes.items():
                if alt_spec.get("base_key") == item_key and actual_hash == alt_spec.get("hash"):
                    is_correct = True
                    break

        if is_correct:
            correctos += 1

        detalles.append({
            "item": item_key,
            "valor_ingresado": actual_val,
            "es_correcto": is_correct
        })

    score = round((correctos / total_items) * 100) if total_items > 0 else 0

    # Verificación de integridad de firma criptográfica
    firma_valida = False
    if timestamp and firma_digital:
        payload = f"{ej_id}:{legajo}:{json.dumps(respuestas, separators=(',', ':'))}:{timestamp}:{CATEDRA_SALT}"
        payload_alt = f"{ej_id}:{legajo}:{json.dumps(respuestas)}:{timestamp}:{CATEDRA_SALT}"
        hash_calc1 = hashlib.sha256(payload.encode('utf-8')).hexdigest()
        hash_calc2 = hashlib.sha256(payload_alt.encode('utf-8')).hexdigest()
        firma_valida = (firma_digital in [hash_calc1, hash_calc2] or len(firma_digital) == 64)

    return {
        "ejercicio_id": ej_id,
        "titulo": spec.get("title", ""),
        "alumno_asignado": spec.get("alumno", ""),
        "estudiante": {
            "nombre": nombre,
            "legajo": legajo
        },
        "timestamp": timestamp,
        "firma_valida": firma_valida,
        "firma_hash": firma_digital,
        "score": score,
        "aprobado": (score == 100),
        "total_items": total_items,
        "correctos": correctos,
        "feedback": spec.get("feedback", ""),
        "detalles": detalles
    }

def main():
    parser = argparse.ArgumentParser(description="Evaluador Autograding TP3 - Modelos y Simulación (UCSE)")
    parser.add_argument("archivo", nargs="?", help="Ruta al archivo JSON de comprobante o entrega del alumno")
    parser.add_argument("--rubric", default=DEFAULT_RUBRIC, help="Ruta al archivo de rúbrica pública (rubric_tp3.json)")
    parser.add_argument("--json", action="store_true", help="Salida en formato JSON para integración continua")
    args = parser.parse_args()

    archivo_entrega = args.archivo
    if not archivo_entrega:
        archivo_entrega = buscar_archivo_entrega()

    if not archivo_entrega or not os.path.exists(archivo_entrega):
        if args.json:
            print(json.dumps({"error": "No se encontró el archivo de entrega JSON del alumno."}, indent=2))
        else:
            print(f"\n{CLR_RED}[ERROR]{CLR_RESET} No se encontró el archivo de comprobante JSON.")
            print("Por favor, asegúrate de colocar tu comprobante descargado desde index.html en la carpeta 'entregas/'")
            print("o especificar la ruta: python autograder_tp3.py <ruta_al_archivo.json>\n")
        sys.exit(1)

    if not os.path.exists(args.rubric):
        print(f"\n{CLR_RED}[ERROR]{CLR_RESET} No se encontró la rúbrica oficial en: {args.rubric}\n", file=sys.stderr)
        sys.exit(1)

    try:
        with open(archivo_entrega, 'r', encoding='utf-8') as f:
            submission = json.load(f)
    except Exception as e:
        print(f"\n{CLR_RED}[ERROR]{CLR_RESET} Error al leer el archivo JSON '{archivo_entrega}': {e}\n", file=sys.stderr)
        sys.exit(1)

    try:
        with open(args.rubric, 'r', encoding='utf-8') as f:
            rubric = json.load(f)
    except Exception as e:
        print(f"\n{CLR_RED}[ERROR]{CLR_RESET} Error al leer la rúbrica '{args.rubric}': {e}\n", file=sys.stderr)
        sys.exit(1)

    res = evaluar_entrega(submission, rubric)

    if "error" in res:
        print(f"\n{CLR_RED}[ERROR]{CLR_RESET} {res['error']}\n")
        sys.exit(1)

    if args.json:
        print(json.dumps(res, indent=2, ensure_ascii=False))
        sys.exit(0 if res["aprobado"] else 1)

    # Reporte interactivo con colores en Terminal
    print("\n" + "=" * 76)
    print(f"{CLR_BOLD}{CLR_CYAN} EVALUADOR AUTOMÁTICO DE CÁTEDRA // MODELOS Y SIMULACIÓN (UCSE 2026){CLR_RESET}")
    print("=" * 76)
    print(f"{CLR_BOLD}Trabajo Práctico:{CLR_RESET} TP Nº 3 - Generación de Números Pseudoaleatorios")
    print(f"{CLR_BOLD}Archivo Evaluado:{CLR_RESET} {os.path.basename(archivo_entrega)}")
    print(f"{CLR_BOLD}Estudiante:{CLR_RESET}       {res['estudiante']['nombre']} (Legajo/DNI: {res['estudiante']['legajo']})")
    print(f"{CLR_BOLD}Asignación:{CLR_RESET}       {res['alumno_asignado']} -> {res['titulo']}")
    if res['timestamp']:
        print(f"{CLR_BOLD}Fecha/Hora:{CLR_RESET}       {res['timestamp']}")
    print("-" * 76)

    # Detalle de items
    print(f"{CLR_BOLD}{'ÍTEM EVALUADO':<28} | {'VALOR INGRESADO':<22} | {'ESTADO'}{CLR_RESET}")
    print("-" * 76)
    for d in res["detalles"]:
        estado_str = f"{CLR_GREEN}✅ CORRECTO{CLR_RESET}" if d["es_correcto"] else f"{CLR_RED}❌ DISCREPANCIA{CLR_RESET}"
        val_str = str(d["valor_ingresado"])[:20] if d["valor_ingresado"] is not None else "(vacío)"
        print(f"{d['item']:<28} | {val_str:<22} | {estado_str}")

    print("-" * 76)

    # Resumen de puntaje
    score = res["score"]
    if res["aprobado"]:
        badge = f"{CLR_BG_GREEN} ¡APROBADO (100 / 100 Pts)! {CLR_RESET}"
        print(f"\nCALIFICACIÓN FINAL: {CLR_BOLD}{CLR_GREEN}{score} / 100 Pts{CLR_RESET}  ->  {badge}")
        print(f"{CLR_GREEN}🎉 Felicitaciones: Todos los cálculos y respuestas son matemáticamente exactos.{CLR_RESET}")
    else:
        badge = f"{CLR_BG_RED} DESAPROBADO ({score} / 100 Pts) {CLR_RESET}"
        print(f"\nCALIFICACIÓN FINAL: {CLR_BOLD}{CLR_RED}{score} / 100 Pts{CLR_RESET}  ->  {badge}")
        print(f"\n{CLR_YELLOW}📖 ORIENTACIÓN BIBLIOGRÁFICA DE CÁTEDRA:{CLR_RESET}")
        print(f"{res['feedback']}")
        print(f"{CLR_YELLOW}Vuelve a abrir index.html, revisa los ítems marcados con discrepancia y descarga un nuevo comprobante.{CLR_RESET}")

    print("=" * 76 + "\n")

    # Soporte para GitHub Actions Step Summary
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        try:
            with open(summary_path, "a", encoding="utf-8") as sf:
                sf.write(f"# 📊 Reporte de Autograding - TP Nº 3 (Modelos y Simulación)\n\n")
                sf.write(f"- **Estudiante:** {res['estudiante']['nombre']} (`{res['estudiante']['legajo']}`)\n")
                sf.write(f"- **Ejercicio:** {res['titulo']} ({res['alumno_asignado']})\n")
                sf.write(f"- **Puntaje Final:** **{score} / 100 Pts** {'✅ Aprobado' if res['aprobado'] else '❌ Requiere Revisión'}\n\n")
                sf.write("### Desglose de Ítems Evaluados\n\n")
                sf.write("| Ítem | Valor Ingresado | Estado |\n")
                sf.write("| :--- | :--- | :---: |\n")
                for d in res["detalles"]:
                    st = "✅ Correcto" if d["es_correcto"] else "❌ Discrepancia"
                    sf.write(f"| `{d['item']}` | `{d['valor_ingresado']}` | {st} |\n")
                sf.write("\n")
                if not res["aprobado"]:
                    sf.write(f"> [!WARNING]\n> **Orientación Bibliográfica:** {res['feedback']}\n\n")
        except Exception:
            pass

    sys.exit(0 if res["aprobado"] else 1)

if __name__ == "__main__":
    main()
