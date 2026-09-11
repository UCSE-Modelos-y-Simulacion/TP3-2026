@echo off
REM =============================================================================
REM SUITE DE EVALUACIÓN AUTOMÁTICA (WINDOWS) - MODELOS Y SIMULACIÓN (UCSE)
REM Trabajo Práctico Nº 3: Generación de Números Pseudoaleatorios
REM =============================================================================

chcp 65001 >nul
echo.
echo ===========================================================================
echo  SUITE DE EVALUACION DE TP3 (AUTOGRADING) // UCSE 2026
echo ===========================================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] No se encontro Python en el PATH del sistema.
    echo Por favor instala Python 3 desde python.org o la Microsoft Store.
    pause
    exit /b 1
)

python autograder_tp3.py --rubric rubric_tp3.json
set EXIT_CODE=%errorlevel%

echo.
if %EXIT_CODE% equ 0 (
    echo [OK] Evaluacion finalizada exitosamente con 100/100 Pts.
) else (
    echo [ATENCION] La evaluacion no alcanzo los 100 Pts. Revisa los items indicados.
)
echo.
pause
exit /b %EXIT_CODE%
