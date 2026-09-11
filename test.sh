#!/usr/bin/env bash
# =============================================================================
# SUITE DE EVALUACIÓN AUTOMÁTICA (AUTOGRADING) - MODELOS Y SIMULACIÓN (UCSE)
# Trabajo Práctico Nº 3: Generación de Números Pseudoaleatorios
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🔍 Iniciando Suite de Evaluación de TP3 (Autograding)..."

# Verificar intérprete de Python 3
if command -v python3 &>/dev/null; then
    PYTHON_CMD="python3"
elif command -v python &>/dev/null; then
    PYTHON_CMD="python"
else
    echo "❌ [ERROR] No se encontró Python 3 instalado en el sistema."
    exit 1
fi

# Buscar comprobante de entrega en entregas/ o en la raíz
ENTREGA_FILE=""

for f in entregas/*.json comprobante_tp3_*.json respuestas_tp3.json entrega.json; do
    if [ -f "$f" ]; then
        bname=$(basename "$f")
        if [ "$bname" != "rubric_tp3.json" ] && [ "$bname" != "rubric_tp3_master.json" ] && [ "$bname" != "package.json" ]; then
            ENTREGA_FILE="$f"
            break
        fi
    fi
done

if [ -z "$ENTREGA_FILE" ]; then
    echo ""
    echo "❌ [ERROR] No se encontró ningún archivo de entrega .json en 'entregas/' ni en la raíz."
    echo "👉 Instrucciones:"
    echo "   1. Abre 'index.html' en tu navegador."
    echo "   2. Resuelve tu ejercicio asignado y alcanza 100/100 Pts."
    echo "   3. Haz clic en 'Descargar Comprobante (.json)'."
    echo "   4. Coloca el archivo descargado dentro de la carpeta 'entregas/'."
    echo "   5. Vuelve a ejecutar ./test.sh (o haz git push)."
    echo ""
    exit 1
fi

echo "📁 Comprobante detectado: $ENTREGA_FILE"
echo "🚀 Ejecutando Evaluador Criptográfico Oficial..."
echo ""

# Ejecutar autograder oficial
$PYTHON_CMD autograder_tp3.py "$ENTREGA_FILE" --rubric rubric_tp3.json
EXIT_CODE=$?

exit $EXIT_CODE
