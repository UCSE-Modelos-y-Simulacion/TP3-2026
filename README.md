# Trabajo Práctico Nº 3: Generación de Números Pseudoaleatorios
## Cátedra: Modelos y Simulación (Ciclo Lectivo 2026) — UCSE
> **Carrera:** Ingeniería en Informática  
> **Tema:** Algoritmos Determinísticos No Congruenciales y Congruenciales (Lineales y No Lineales)  
> **Modalidad:** Laboratorio Web Interactivo Autoevaluativo (*Web-First Autograding sin programación*)

---

## 🎯 Propósito del Trabajo Práctico

El objetivo de este laboratorio es que el estudiante domine la **mecánica operativa, aritmética modular y comportamiento cíclico** de los generadores de números pseudoaleatorios ($r_i \in [0, 1)$), analizando en detalle:
1. El impacto de la cantidad de dígitos $D$ y el centrado con padding de ceros en métodos no congruenciales.
2. El fenómeno crítico de **degeneración** (colapso a cero o bucles prematuros).
3. Las **condiciones de Hull-Dobell** para garantizar período completo ($P = m$) en generadores congruenciales mixtos.
4. Las propiedades de período máximo en generadores multiplicativos ($P = m/4$) y aditivos.
5. El comportamiento de generadores no lineales y criptográficos como **Blum, Blum y Shub (BBS)**.

---

## 👥 Matriz de Asignación de Ejercitaciones (8 Alumnos)

Cada estudiante tiene asignada una ejercitación específica e individualizada en la plataforma web:

| # | Alumno Asignado | Algoritmo & Enunciado | Parámetros Iniciales | Desafío Matemático Principal |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Alumno 1** | **Cuadrados Medios (Estándar)** | $X_0 = 5735$ ($D = 4$), $n = 8$ | Manejo de longitud variable al elevar al cuadrado, padding de ceros a la izquierda y extracción central. |
| **02** | **Alumno 2** | **Cuadrados Medios (Degeneración)** | $X_0 = 5100$ ($D = 4$), $n = 8$ | Detección de colapso rápido a un punto fijo repetitivo ($100 \to 100$) y generación trivial de $r_i = 0.0100$. |
| **03** | **Alumno 3** | **Productos Medios** | $X_0 = 5015$, $X_1 = 5734$ ($D = 4$), $n = 6$ | Multiplicación sucesiva, descarte de la semilla más antigua y ventana deslizante de extracción central. |
| **04** | **Alumno 4** | **Multiplicador Constante** | $X_0 = 9803$, Constante $a = 6965$ ($D = 4$), $n = 6$ | Aplicación de factor constante fijo $a$ sobre el último término generado y comparación frente a Productos Medios. |
| **05** | **Alumno 5** | **Congruencial Lineal Mixto (Hull-Dobell)** | $X_0 = 7$, $a = 5$, $c = 7$, $m = 16$ ($n = 16$) | Demostración analítica de las 3 condiciones de Hull-Dobell y comprobación de período completo $P = 16$. |
| **06** | **Alumno 6** | **Congruencial Lineal (Período Incompleto)** | $X_0 = 6$, $a = 5$, $c = 12$, $m = 16$ ($n = 16$) | Identificación de la condición violada ($\operatorname{MCD}(12, 16) = 4 \neq 1$) y cálculo de la órbita de subperíodo corto ($P = 4$). |
| **07** | **Alumno 7** | **Congruencial Multiplicativo** | $X_0 = 17$, $a = 5$, $m = 64 = 2^6$ ($n = 16$) | Verificación de condiciones de período máximo ($P = m/4 = 16$) para módulo binario y semilla impar. |
| **08** | **Alumno 8** | **Congruencial Aditivo & Blum-Blum-Shub** | Secuencia $k = 5$ $[65, 89, 98, 03, 69]$, $m = 100$ + BBS con $p = 7, q = 11, X_0 = 9$ | Suma modular retrasada $(X_{i-1} + X_{i-k}) \pmod m$ y validación de primos de Blum $p, q \equiv 3 \pmod 4$. |

---

## 🚀 ¿Cómo Utilizar la Plataforma Web Autoevaluativa?

1. **Abrir la plataforma:**  
   Haz doble clic sobre el archivo [`index.html`](index.html) para abrirlo en tu navegador web preferido (Google Chrome, Microsoft Edge, Firefox, etc.). No requiere instalación de Node, Python ni servidores externos.

2. **Seleccionar tu ejercicio:**  
   En la barra lateral izquierda, localiza y haz clic sobre tu número de alumno asignado (**Ejercicio 01 al 08**).

3. **Consultar la teoría:**  
   Cada ejercicio incluye un panel colapsable desplegable:  
   `📖 Dónde estudiar este tema en la teoría de cátedra` que indica la diapositiva exacta del PDF oficial (`Teoria_-_Numeros_pseudoaleatorios.pdf`) con resúmenes de las fórmulas clave.

4. **Completar la tabla y responder preguntas:**  
   - Ingresa los resultados de tus cálculos paso a paso en las celdas correspondientes ($Y_i$, valores con ceros a la izquierda, dígitos centrales extraídos y números normalizados $r_i$).
   - En los ejercicios congruenciales, responde a las preguntas conceptuales sobre las condiciones de Hull-Dobell o de período máximo.

5. **Autoevaluar en tiempo real:**  
   Haz clic en el botón **"🧪 Comprobar y Autoevaluar"**:
   - Las celdas correctas se marcarán en **verde ✅**.
   - Las celdas con errores se marcarán en **rojo ❌** y el sistema te brindará **pistas pedagógicas** para corregir el cálculo (por ejemplo, recordándote el centrado de dígitos o la regla de padding).
   - Puedes reintentar las veces que sean necesarias hasta alcanzar **100/100 Pts**.

6. **Generar y Descargar tu Comprobante de Aprobación:**  
   Al alcanzar el 100% de la puntuación:
   - Se habilitará el botón **"📥 Descargar Comprobante de Entrega (.json)"**.
   - Ingresa tu **Nombre, Apellido y Legajo/DNI**.
   - El sistema generará un archivo `comprobante_tp3_ejercicio_XX_tuLegajo.json` protegido con una firma criptográfica SHA-256 de cátedra.
   - Coloca dicho archivo descargado dentro de la carpeta `entregas/`.

7. **Autoevaluación en Consola y GitHub Classroom:**
   - **En Windows:** Ejecuta con doble clic `test.bat`.
   - **En Linux / WSL / macOS:** Ejecuta en la terminal `./test.sh`.
   - El script ejecutará el evaluador criptográfico oficial `autograder_tp3.py` y verificará tus respuestas.
   - Al hacer `git add entregas/`, `git commit -m "Entrega TP3"` y `git push`, el flujo de **GitHub Actions** evaluará automáticamente tu entrega y le otorgará el tilde verde ✅ en GitHub Classroom / Classmoji.

---

## 📚 Mapeo con el Material Teórico de la Cátedra

Todos los ejercicios y sus parámetros de control han sido extraídos rigurosamente del documento:
`Teoria_-_Numeros_pseudoaleatorios.pdf`:
* **Páginas 7 a 9:** Algoritmo de Cuadrados Medios (Ejemplo $X_0 = 5735$).
* **Páginas 10 a 12:** Algoritmo de Productos Medios (Ejemplo $X_0 = 5015, X_1 = 5734$).
* **Páginas 13 a 15:** Algoritmo de Multiplicador Constante (Ejemplo $a = 6965, X_0 = 9803$).
* **Páginas 16 a 21:** Algoritmo Congruencial Lineal Mixto y Teorema de Hull-Dobell.
* **Páginas 22 a 24:** Algoritmo Congruencial Multiplicativo.
* **Páginas 25 a 27:** Algoritmo Congruencial Aditivo.
* **Páginas 28 a 30:** Algoritmo Congruencial Cuadrático.
* **Página 31:** Algoritmo de Blum, Blum y Shub (BBS).

---
*Cátedra de Modelos y Simulación — Facultad de Ingeniería — UCSE 2026*
