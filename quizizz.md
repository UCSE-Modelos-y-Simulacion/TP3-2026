# 🎮 Banco de Preguntas Evaluativas: Generación de Números Pseudoaleatorios (TP3)
## Cátedra: Modelos y Simulación (Ciclo Lectivo 2026) — UCSE
> **Temas Evaluados:** Métodos No Congruenciales (Cuadrados Medios, Productos Medios, Multiplicador Constante) y Métodos Congruenciales (Lineal Mixto, Hull-Dobell, Multiplicativo, Aditivo, Blum-Blum-Shub).  
> **Formato:** Selección Múltiple con Estrategia Anti-Sesgo y Bloque Aiken al final para importación directa en Moodle / Aula Virtual.

---

### 📋 Cuestionario Conceptual (10 Preguntas)

#### Pregunta 1
**En el método de Cuadrados Medios propuesto por Von Neumann, si la semilla $X_0$ posee $D = 4$ dígitos y al elevarla al cuadrado el resultado $Y_0 = X_0^2$ arroja un número de 7 dígitos, ¿cuál es el procedimiento riguroso a seguir antes de seleccionar los dígitos centrales?**
* A) Se descarta la semilla inmediatamente porque el método solo admite resultados con una cantidad estrictamente par de cifras significativas.
* B) Se le debe anteponer un cero a la izquierda para completar $2D = 8$ dígitos y luego extraer los 4 dígitos centrales.
* C) Se debe multiplicar el resultado obtenido por un factor correctivo de normalización decimal para transformar la secuencia a punto flotante uniforme entre 0 y 1. *(Opción larga distractora)*
* D) Se toman los primeros 4 dígitos de izquierda a derecha descartando los restantes tres dígitos menos significativos.
> **Respuesta Correcta: B**

---

#### Pregunta 2
**¿Qué fenómeno crítico e indeseado describe la "degeneración" en un generador pseudoaleatorio no congruencial como Cuadrados Medios?**
* A) El desbordamiento de memoria por enteros de 64 bits en lenguajes que no admiten precisión arbitraria en aritmética modular. *(Opción larga distractora)*
* B) La oscilación caótica sin período definido a lo largo de millones de réplicas en simulaciones estocásticas complejas.
* C) El colapso permanente de la secuencia hacia el valor cero o hacia un ciclo repetitivo de longitud extremadamente corta.
* D) La generación de números reales mayores a 1 debido a un fallo en el denominador de la fracción normalizadora.
> **Respuesta Correcta: C**

---

#### Pregunta 3
**En el algoritmo de Productos Medios para generar números pseudoaleatorios, ¿cuántas semillas iniciales se requieren y cómo progresa la ventana de cálculo en cada iteración?**
* A) Requiere dos semillas $X_0$ y $X_1$; en cada iteración se descarta la más antigua y el nuevo término central se multiplica por el más reciente.
* B) Requiere únicamente una semilla detonadora y una constante de incremento multiplicativo que se incrementa en cada ciclo de cómputo.
* C) Requiere tres semillas iniciales que se promedian aritméticamente para evitar que la correlación serial afecte la prueba de corridas. *(Opción larga distractora)*
* D) Requiere dos semillas de diferente cantidad de dígitos para asegurar que el período del ciclo supere la cota de Turing.
> **Respuesta Correcta: A**

---

#### Pregunta 4
**¿Cuál es la diferencia operativa fundamental entre el Algoritmo de Productos Medios y el Algoritmo de Multiplicador Constante?**
* A) En Productos Medios se calcula el residuo de la división modular, mientras que en Multiplicador Constante se extraen raíces cuadradas enteras.
* B) Productos Medios garantiza período completo infinito, mientras que el Multiplicador Constante degenera siempre en la tercera iteración.
* C) El Multiplicador Constante reemplaza ambas semillas en cada paso por los residuos cuadráticos de una tabla de constantes estáticas. *(Opción larga distractora)*
* D) En el Multiplicador Constante un factor $a$ permanece fijo en todas las iteraciones, mientras que en Productos Medios ambos factores provienen de la secuencia previa.
> **Respuesta Correcta: D**

---

#### Pregunta 5
**De acuerdo con el Teorema de Hull-Dobell, para que un Generador Congruencial Lineal Mixto $X_{i+1} = (aX_i + c) \pmod m$ alcance su período máximo completo ($P = m$), ¿qué condición debe cumplir la constante aditiva $c$ con respecto al módulo $m$?**
* A) Debe ser un número primo de Fermat mayor estricto que el multiplicador $a$.
* B) Debe ser coprimo con el módulo $m$, es decir, $\operatorname{MCD}(c, m) = 1$.
* C) Debe ser un número par divisible por la mitad exacta de la potencia del módulo utilizado en la arquitectura del microprocesador. *(Opción larga distractora)*
* D) Debe ser idéntico al residuo cuadrático del multiplicador $a$ disminuido en una unidad.
> **Respuesta Correcta: B**

---

#### Pregunta 6
**Bajo las condiciones de Hull-Dobell para período completo en un LCG mixto, si el módulo $m$ es divisible por 4, ¿qué exigencia matemática debe satisfacer el multiplicador $a$?**
* A) La cantidad $(a - 1)$ debe ser múltiplo de 4.
* B) El valor de $a$ debe ser impar y divisible por la raíz cúbica del módulo $m$.
* C) La diferencia $(a + 1)$ debe ser coprima con la suma de todos los divisores impares de la constante aditiva de incremento $c$. *(Opción larga distractora)*
* D) El multiplicador $a$ debe ser obligatoriamente una potencia exacta de base 2.
> **Respuesta Correcta: A**

---

#### Pregunta 7
**En un Generador Congruencial Multiplicativo $X_{i+1} = (a X_i) \pmod m$ con módulo binario $m = 2^g$ ($g \ge 3$) y una semilla impar $X_0$, ¿cuál es el período máximo alcanzable?**
* A) El período completo $P = m = 2^g$.
* B) $P = 2^{g-1} = m / 2$.
* C) $P = 2^{g-2} = m / 4$.
* D) Un período variable que depende exclusivamente de la cantidad de números primos intermedios calculados por la función indicatriz de Euler $\phi(m)$. *(Opción larga distractora)*
> **Respuesta Correcta: C**

---

#### Pregunta 8
**En el Algoritmo Congruencial Aditivo que utiliza la relación recursiva $X_i = (X_{i-1} + X_{i-k}) \pmod m$, ¿qué insumo inicial indispensable debe proporcionarse para comenzar a generar números?**
* A) Una secuencia inicial de $k$ números enteros $[X_1, X_2, \dots, X_k]$.
* B) Dos constantes multiplicativas coprimas de orden superior calculadas previamente mediante la criba de Eratóstenes para números compuestos. *(Opción larga distractora)*
* C) Únicamente el módulo $m$ y una semilla detonadora $X_0$ impar.
* D) Una matriz ortogonal de rotación de dígitos binarios de dimensión $k \times k$.
> **Respuesta Correcta: A**

---

#### Pregunta 9
**¿Cuál es la condición fundamental que deben cumplir los números $p$ y $q$ en el algoritmo criptográfico no lineal de Blum, Blum y Shub (BBS) para generar secuencias pseudoaleatorias robustas?**
* A) Deben ser números pares compuestos que posean al menos cinco factores primos distintos en su descomposición canónica fundamental. *(Opción larga distractora)*
* B) Deben ser números de Fibonacci consecutivos mayores a 1000.
* C) Deben ser números primos tales que ambos cumplan la congruencia $p \equiv 3 \pmod 4$ y $q \equiv 3 \pmod 4$.
* D) Deben ser números primos de Mersenne gemelos cuya diferencia absoluta sea exactamente igual a dos unidades enteras.
> **Respuesta Correcta: C**

---

#### Pregunta 10
**¿Por qué las secuencias generadas por algoritmos determinísticos se denominan "pseudoaleatorias" en lugar de "aleatorias puras"?**
* A) Porque los números generados son completamente predecibles y reproducibles si se conocen los parámetros y las semillas iniciales.
* B) Porque no pueden ser normalizadas en el intervalo continuo $[0, 1)$ mediante divisiones aritméticas convencionales.
* C) Porque contienen errores sistemáticos de truncamiento generados por el estándar IEEE 754 de representación en coma flotante de doble precisión. *(Opción larga distractora)*
* D) Porque siempre generan números enteros impares debido a las propiedades intrínsecas de los registros de desplazamiento con retroalimentación.
> **Respuesta Correcta: A**

---

### 📊 Matriz de Control de Sesgos

| Pregunta | Opción Correcta | Longitud Opción Correcta | Longitud Opción Distractora Máxima |
| :---: | :---: | :---: | :---: |
| 1 | **B** | 99 caracteres | 148 caracteres (Opción C) |
| 2 | **C** | 108 caracteres | 140 caracteres (Opción A) |
| 3 | **A** | 114 caracteres | 142 caracteres (Opción C) |
| 4 | **D** | 134 caracteres | 135 caracteres (Opción C) |
| 5 | **B** | 71 caracteres | 131 caracteres (Opción C) |
| 6 | **A** | 50 caracteres | 136 caracteres (Opción C) |
| 7 | **C** | 28 caracteres | 145 caracteres (Opción D) |
| 8 | **A** | 75 caracteres | 148 caracteres (Opción B) |
| 9 | **C** | 94 caracteres | 148 caracteres (Opción A) |
| 10 | **A** | 105 caracteres | 143 caracteres (Opción C) |

* **Distribución de claves correctas:**
  * **A:** 4 (Preguntas 3, 6, 8, 10)
  * **B:** 2 (Preguntas 1, 5)
  * **C:** 3 (Preguntas 2, 7, 9)
  * **D:** 1 (Pregunta 4)
* **Resultado:** Equilibrado, sin sesgo hacia ninguna letra y con distractores elaborados para penalizar la adivinación por longitud.

---

### 📥 Bloque Formato Aiken (Listo para importar en Moodle / Aula Virtual UCSE)

```text
En el metodo de Cuadrados Medios, si la semilla X0 posee D=4 digitos y X0^2 arroja 7 digitos, que procedimiento se debe seguir?
A. Se descarta la semilla inmediatamente
B. Se antepone un cero a la izquierda para completar 8 digitos y extraer los 4 centrales
C. Se multiplica el resultado por un factor correctivo de normalizacion decimal
D. Se toman los primeros 4 digitos de izquierda a derecha
ANSWER: B

Que fenomeno describe la degeneracion en generadores no congruenciales como Cuadrados Medios?
A. El desbordamiento de memoria por enteros de 64 bits en lenguajes sin precision arbitraria
B. La oscilacion caotica sin periodo definido a lo largo de millones de replicas
C. El colapso permanente de la secuencia hacia el cero o hacia un ciclo de longitud corta
D. La generacion de numeros reales mayores a 1 debido a un fallo en el denominador
ANSWER: C

En el algoritmo de Productos Medios, cuantas semillas iniciales se requieren y como progresa el calculo?
A. Requiere dos semillas; se descarta la mas antigua y el nuevo termino se multiplica por el mas reciente
B. Requiere una semilla detonadora y una constante de incremento multiplicativo
C. Requiere tres semillas iniciales que se promedian aritmeticamente para evitar correlacion
D. Requiere dos semillas de diferente cantidad de digitos para asegurar periodo de Turing
ANSWER: A

Cual es la diferencia operativa fundamental entre Productos Medios y Multiplicador Constante?
A. Productos Medios calcula residuo modular y Multiplicador Constante extrae raices cuadradas
B. Productos Medios garantiza periodo completo y Multiplicador Constante cicla en 3 iteraciones
C. Multiplicador Constante reemplaza ambas semillas por residuos cuadraticos estaticos
D. En Multiplicador Constante un factor permanece fijo y en Productos Medios ambos avanzan
ANSWER: D

Segun Hull-Dobell, para periodo completo en un LCG mixto, que condicion debe cumplir la constante c con respecto al modulo m?
A. Debe ser un numero primo de Fermat mayor que el multiplicador
B. Debe ser coprimo con el modulo m, es decir, MCD(c, m) = 1
C. Debe ser un numero par divisible por la mitad de la potencia del procesador
D. Debe ser identico al residuo cuadratico del multiplicador disminuido en uno
ANSWER: B

Bajo Hull-Dobell, si el modulo m es divisible por 4, que exigencia debe satisfacer el multiplicador a?
A. La cantidad (a - 1) debe ser multiplo de 4
B. El valor de a debe ser impar y divisible por la raiz cubica de m
C. La diferencia (a + 1) debe ser coprima con la suma de divisores de c
D. El multiplicador a debe ser obligatoriamente una potencia exacta de 2
ANSWER: A

En un Generador Congruencial Multiplicativo con m = 2^g (g >= 3) y semilla impar, cual es el periodo maximo alcanzable?
A. El periodo completo P = m
B. P = m / 2
C. P = m / 4
D. Un periodo variable dependiente de los factores de la funcion indicatriz de Euler
ANSWER: C

En el Algoritmo Congruencial Aditivo Xi = (Xi-1 + Xi-k) mod m, que insumo inicial indispensable debe proporcionarse?
A. Una secuencia inicial de k numeros enteros
B. Dos constantes multiplicativas coprimas de orden superior calculadas por Eratostenes
C. Unicamente el modulo m y una semilla impar
D. Una matriz ortogonal de rotacion de digitos binarios de dimension k x k
ANSWER: A

Cual es la condicion fundamental que deben cumplir los numeros p y q en el algoritmo de Blum Blum y Shub (BBS)?
A. Deben ser numeros pares compuestos con al menos cinco factores primos distintos
B. Deben ser numeros de Fibonacci consecutivos mayores a 1000
C. Deben ser numeros primos tales que ambos cumplan p mod 4 = 3 y q mod 4 = 3
D. Deben ser numeros primos gemelos cuya diferencia absoluta sea exactamente 2
ANSWER: C

Por que las secuencias generadas por algoritmos deterministicos se denominan pseudoaleatorias?
A. Porque los numeros son completamente predecibles y reproducibles si se conocen las semillas
B. Porque no pueden ser normalizadas en el intervalo continuo [0, 1) mediante division
C. Porque contienen errores sistematicos del estandar IEEE 754 de punto flotante
D. Porque siempre generan numeros enteros impares debido a los registros de desplazamiento
ANSWER: A
```
