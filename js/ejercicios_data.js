/**
 * ============================================================================
 * TRABAJO PRÁCTICO Nº 3 - MODELOS Y SIMULACIÓN (UCSE 2026)
 * Definición de Datos y Rúbrica Criptográfica Zero-Knowledge
 * ============================================================================
 * IMPORTANTE: Este archivo NO contiene soluciones en texto claro.
 * La autoevaluación se realiza mediante hashes SHA-256 unidireccionales
 * protegidos con Salt de Cátedra.
 * ============================================================================
 */

window.TP3_DATA = {
  SALT: "MODELOS_SIMULACION_UCSE_2026_CATEDRA_SECRET_SALT",
  ejercicios: [
  {
    "id": 1,
    "alumno": "Alumno #1",
    "titulo": "Algoritmo de Cuadrados Medios (Von Neumann)",
    "categoria": "Métodos No Congruenciales (Aritméticos)",
    "descripcion": "A partir de una semilla inicial <strong>X₀ = 5735</strong> (D = 4), eleva sucesivamente al cuadrado. Si el producto tiene menos de 2D = 8 dígitos, añade ceros a la izquierda antes de extraer los 4 dígitos centrales para formar <strong>X<sub>i+1</sub></strong> y <strong>r<sub>i</sub> = X<sub>i+1</sub> / 10<sup>D</sup></strong>.",
    "parametros": [
      {
        "label": "Semilla Inicial",
        "value": "X₀ = 5735"
      },
      {
        "label": "Dígitos de Semilla",
        "value": "D = 4"
      },
      {
        "label": "Dígitos Producto",
        "value": "2D = 8 (con ceros)"
      },
      {
        "label": "Iteraciones",
        "value": "n = 8"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 7, 8 y 9",
      "texto": "El método de Von Neumann (1946) requiere una semilla de D dígitos. Al elevarla al cuadrado, se deben seleccionar los D dígitos centrales. Si el cuadrado resultante tiene menos de 2D dígitos, se deben agregar ceros a la izquierda (padding) para centrar correctamente. El número pseudoaleatorio se obtiene como ri = 0.D dígitos."
    },
    "hasQuestions": false,
    "columnas": [
      "i",
      "Xᵢ",
      "Yᵢ = Xᵢ² (8 dígitos)",
      "Dígitos Centrales (Xᵢ₊₁)",
      "rᵢ (0.xxxx)"
    ],
    "periodo": "No cicla en las primeras 8 iteraciones (variabilidad observada).",
    "filas": [
      {
        "i": 0,
        "xi": "5735",
        "hashes": {
          "yi": "6d9877bc4e7117c15a5d8b94cdf460d27504a2c7ec69b1200c08452092d36ca5",
          "next_x": "411c87b8481efc225fcaca44de9709a246fa05e70273e0b154f213cebd3b8204",
          "ri": "2a7ee49ba098e7b2b85347b1ac9e4e0ccf5a8063e0c63cebbbcc991bebdf8019"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "xi": "8902",
        "hashes": {
          "yi": "721761ff1630fe62084ec76deda08c2e55cf1be9e888fb93a8772795b187973d",
          "next_x": "5ed3b1119362cb8adeaf61b53e0247f3a1c8ede5be622643091c9063116a3fe5",
          "ri": "693676883bec734ada0518fdc793774b3d8e80307a9763853e9ae03fe5fa137d"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "xi": "2456",
        "hashes": {
          "yi": "a47400711d16c41367ccf817d7a8c819617b208d6238742ab89476ba2dc29cd0",
          "next_x": "b3915d102ff712c3c2264f3dbab81b823cd4fdb67ba9ae6bdf78da50ffb28598",
          "ri": "4f22dd328647789ffcdc145f8657a96b9ab6feca4d03e1e8e90ddd6d56fcff4f"
        },
        "altHashes": {
          "next_x": "67726a501672d5f251eb6b06b0991631a5ec96aed2a0535e2b9e751c4186fdca"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "xi": "0319",
        "hashes": {
          "yi": "6abeb2a7ff4ade25f1b0e287af253db1f1afa45e8ad0935d49d8b89c28a63280",
          "next_x": "df74a5f356739586ac64c94382461416357a98fb0550343d014c51e41e92bd07",
          "ri": "8d1d49d3a17de4b1994e8fa80db5942ae829f3610177f1cc2f333455df9b280b"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "xi": "1017",
        "hashes": {
          "yi": "faa16ba05439052071cbb2611f7b6ec8ff33e510f4d2cba7455527817e676aae",
          "next_x": "cddc055aba8c55494ef22e27c813dc418874e63314632aa2e07ddcc233df2289",
          "ri": "e54ee3f2e1ec2237f570e7c25ffd4b3f42d73434b8375f97d3952e53b32c5a48"
        },
        "altHashes": {
          "next_x": "1548ffaddb5afb4565ac1df0a423df4598d2bac27c9b7f04f8b4c550fc304f97"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "xi": "0342",
        "hashes": {
          "yi": "74a75819742913c765b640eaf0e63d8afdba1539c560974d7cad344b54ffbda7",
          "next_x": "efd64e2338b4943501e9b4fed533ab1708cec85adb4fdbe32ab946e2f7903456",
          "ri": "aa042dd022aa11fc7de151c4147ddab6c2f76518770b9e3ea1480f564e83ea11"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 6,
        "xi": "1169",
        "hashes": {
          "yi": "70aaa0f27bb2f3cdd1fb03c38dd4d200308b2979e641faa9f5a19f4d5f908f50",
          "next_x": "03db0e2e80cdcec9e503dd18a8a9cc826f2530f247e4b99f8b45eac279870b70",
          "ri": "7b4ce55940746cb5eef88a6f0a37d2329566251726ee0302f6268e099bf4e69d"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 7,
        "xi": "3665",
        "hashes": {
          "yi": "7c3360e06dfa6a011c88471c7b0f60fe992d0b080aeba7a33444513663831c37",
          "next_x": "e7f4b272c99f220fe4e5f3e053aaf7b063ea7c868ab216f12db16b042484abec",
          "ri": "9efc53d30de2f7f31f192e7bb81386460840eae93d0b5bd23bb8ff280508584b"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 2,
    "alumno": "Alumno #2",
    "titulo": "Cuadrados Medios: Fenómeno de Degeneración",
    "categoria": "Métodos No Congruenciales (Aritméticos)",
    "descripcion": "Analiza el colapso de secuencias en Cuadrados Medios usando la semilla detonadora <strong>X₀ = 5100</strong> (D = 4). Observa cómo rápidamente cae en un punto fijo trivial (<strong>100 → 100</strong>) generando números idénticos.",
    "parametros": [
      {
        "label": "Semilla Inicial",
        "value": "X₀ = 5100"
      },
      {
        "label": "Dígitos de Semilla",
        "value": "D = 4"
      },
      {
        "label": "Objetivo",
        "value": "Detectar el ciclo degenerado"
      },
      {
        "label": "Iteraciones",
        "value": "n = 6"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 7, 8 y 9 (Comportamiento y Defectos de Von Neumann)",
      "texto": "Uno de los mayores defectos del algoritmo de Cuadrados Medios es su tendencia a 'degenerar' rápidamente: tras pocas iteraciones, la semilla puede convertirse en ceros (0000) o entrar en un ciclo cerrado muy corto de período 1, perdiendo toda utilidad estadística."
    },
    "hasQuestions": true,
    "questions": [
      {
        "id": "q_degen_iter",
        "label": "¿En qué iteración el generador entra en el ciclo repetitivo estacionario?",
        "type": "input",
        "hash": "35761981d92a9da0dccba6aac2cc4b579602f3beae93a1d94ba565b438858fa4",
        "hint": "Observa en qué iteración el valor generado vuelve a ser exactamente idéntico al anterior."
      },
      {
        "id": "q_degen_valor",
        "label": "¿Cuál es el valor del punto fijo entero que se repite indefinidamente?",
        "type": "input",
        "hash": "f9c31e65a44457ebd799c8793c09156ac3465dd0e8c0a104a0404b8212970ecd",
        "hint": "Identifica el entero que queda atrapado en el bucle estacionario."
      }
    ],
    "columnas": [
      "i",
      "Xᵢ",
      "Yᵢ = Xᵢ² (8 dígitos)",
      "Dígitos Centrales (Xᵢ₊₁)",
      "rᵢ (0.xxxx)"
    ],
    "periodo": "Degeneración inmediata: Ciclo estacionario de período 1 en X = 100.",
    "filas": [
      {
        "i": 0,
        "xi": "5100",
        "hashes": {
          "yi": "681564582b01e7e3c20b236f7f931015f70ef850b4eb854291dd0c86c5f7c5be",
          "next_x": "7eaaff2876fc3a77ba8f7a1e5334801e907be314cd957759cd4b79f04e35e664",
          "ri": "6ebabbc6292cedf9d408de0e6e8094e15fa77aca07d03dc4d8e08735db8274d9"
        },
        "altHashes": {
          "next_x": "1469493deb16808d1951b89f0c02b8e523fd8de6b77cd199f7952d7f3f16a5b4",
          "ri": "5f7a8a6a2479e04d8aa37f97c7f68c2aacf69d94ad14bba49ef9719b3521d7c1"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "xi": "0100",
        "hashes": {
          "yi": "a8eaa2ff4c36e8d94b2d40963a4397fbe6560c9026db0238031e59abb5a423d9",
          "next_x": "546b465b89c2e6084a51a270067d3b206b015096d72289b963b53998968cbda2",
          "ri": "a211e6b31bfcedcdce027a48c6347eda2ff7fa5d4baaf5fc446be7d2528e8d1b"
        },
        "altHashes": {
          "next_x": "cf8983c24f26807fe464d10f212912d20bbb6a6dbcc984b628e9bf393575c96a",
          "ri": "ed85e35695adcf9a97c719756d7789e65c09c57661ee9de43cc3e2405fe4ce0e"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "xi": "0100",
        "hashes": {
          "yi": "32f4b43d3f10151d9ae7fd029fa22fd1e939c2846a1173c1f98375ad168277f7",
          "next_x": "af7d7a258f4d7d0ba73bfce9480b4779e20e0da2f47c6670e5da0dbea9b334e4",
          "ri": "7f0c75667f8f4a98d2573194b71398d2f745f1e815e2d6759f28af13073cb91a"
        },
        "altHashes": {
          "next_x": "d16d08778a265bc797711688d509abe709086070aa83bb038ddce9ab79db33e4",
          "ri": "c9cf431407a9457cfd2d0941a5c8ff44a810bf54e8706aa5094835be96ab928f"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "xi": "0100",
        "hashes": {
          "yi": "5fa12fa46f3530024ae1d8b5e9ce96dc1e2ecf7e510399b630925996f68783af",
          "next_x": "bb244766fc4f2ab9a0b9e27516a825c147a91897734449a5cb661b2bb086d6cc",
          "ri": "22cd44f88f00112bb52520034f4c37bd1644f55253a4d6adde5aacf30a9a19f4"
        },
        "altHashes": {
          "next_x": "164d7cb9cbefc71713a4d17e83d4dda15bbb8516f858842e549d0f96b7d8434a",
          "ri": "37eca1d753cb763f0866710fffe2ea79a5688825ff4e11c264cdfac2318bb1d1"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "xi": "0100",
        "hashes": {
          "yi": "0eca837df5a0039cb9fc3e2b545644832dba383c36abcb70e8152177f2a8f3bd",
          "next_x": "5ef99ce396826b8ecc164d95c9cb91bb1ca9a62083dfc25f8dc79466502fd099",
          "ri": "ace8c78fc25f0bcfb4af704a1289e2b40d684c2590b58ae579d90c41cbd551f9"
        },
        "altHashes": {
          "next_x": "6492137c315af73e8c5876c0537b9fcc78ceaaeb5e0adfe990d86e13bd102284",
          "ri": "9012fae87c43c19972c4986d6c9c2f83953014270ccd37013a252c75726a4b37"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "xi": "0100",
        "hashes": {
          "yi": "1e5ca4499c85820b2b22bb921ceb3397a3aa4605956dec07c20646af59d64bae",
          "next_x": "803d18ca42e89ca5d35e318ae2360b6af6253ffd80ffcdc7a6703e9c875cef75",
          "ri": "e4e1f564620a29cbb8c7a2c7dc4f64c3ed7201e73da7692d5a0aec3339a22a9f"
        },
        "altHashes": {
          "next_x": "623991aedacb167f2e3370edac22608e6d70fe2a1476717471e41e6240ac8c0d",
          "ri": "0a341d505df4707941b7c5af6a1dbd0c8e75283ea6f6fbe04f2f36704b61bbec"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 3,
    "alumno": "Alumno #3",
    "titulo": "Algoritmo de Productos Medios",
    "categoria": "Métodos No Congruenciales (Aritméticos)",
    "descripcion": "Requiere dos semillas <strong>X₀ = 5015</strong> y <strong>X₁ = 5734</strong> (D = 4). Multiplica ambas semillas, toma los 4 dígitos centrales para formar <strong>X₂</strong>, y luego descarta la semilla más antigua (X₀) multiplicando <strong>X₁ × X₂</strong>, y así sucesivamente.",
    "parametros": [
      {
        "label": "Semilla 1",
        "value": "X₀ = 5015"
      },
      {
        "label": "Semilla 2",
        "value": "X₁ = 5734"
      },
      {
        "label": "Dígitos",
        "value": "D = 4 (Centro de 8)"
      },
      {
        "label": "Iteraciones",
        "value": "n = 6"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 10, 11 y 12",
      "texto": "El algoritmo de Productos Medios multiplica dos semillas de D dígitos. Del producto se eligen los D dígitos del centro para el nuevo ri. Luego se elimina la semilla más antigua y se multiplica la otra por el nuevo término. Se repite la ventana deslizante."
    },
    "hasQuestions": false,
    "columnas": [
      "i",
      "Factor 1",
      "Factor 2",
      "Yᵢ = F₁ × F₂",
      "Dígitos Centrales (Xᵢ₊₂)",
      "rᵢ"
    ],
    "periodo": "No cicla en las primeras 6 iteraciones.",
    "filas": [
      {
        "i": 0,
        "f1": "5015",
        "f2": "5734",
        "hashes": {
          "yi": "521cc790e5f0aba2cb78db98a5cf1ec9f2a4f514fb43c8f598cbd0de2bfbe189",
          "next_x": "14e2cb8bf5fc8e600f74bb57605c6055ae7e5c639806b724af251e49c567b4e7",
          "ri": "dc7e8a20782da95353e4da6a7f15203a43d051ec229156eb89ad924a01515cae"
        },
        "altHashes": {
          "ri": "b531b66a9177da931e422dda6ac561028df44e9d72783c2864b2751c4014ce62"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "f1": "5734",
        "f2": "7560",
        "hashes": {
          "yi": "e2a1c32bb593c31b7eac24e09ad041862e9f8551454bf57a0947a4b48d863461",
          "next_x": "7312a0685776a2c1f24a29a95b8664c9e6accfde45719f84e9bb145a784f8e52",
          "ri": "fc01043d5ae0d7c29c9cc9aa0f402c78b529283396f860c35282cc34c7a2377b"
        },
        "altHashes": {
          "ri": "696da3cd19a4c95f9df31e8c9ae5dddcf613582f0fd78f27f7792209cf5b06fd"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "f1": "7560",
        "f2": "3490",
        "hashes": {
          "yi": "6dbff4dbbd005948050c8be0cccb029fccfb188579ef39cea0fc03d1df261273",
          "next_x": "3046f7bd93a2030402195b5d82ab33c881fe04d912a89d0e64bc452645e19d4b",
          "ri": "485b97b247aea9e73011d8757fb99b6456ff1671c2b16fa1d39477d33e639173"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "f1": "3490",
        "f2": "3844",
        "hashes": {
          "yi": "ac7f01f4108156b95970788c47af0d74bc0b3bec1d43f46dbd182393b1e94508",
          "next_x": "42fa72068737072ae30103f0929668be2543bc4f64deb3bc643169582b9c9b80",
          "ri": "280073f024febb1e92f9ebd254debf97350e86328d9ff29e9d6b2af40fc06a6f"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "f1": "3844",
        "f2": "4155",
        "hashes": {
          "yi": "059b27c603afacbd86d6da156000fb20f9129e79c7eb5b15b456f068e96173dc",
          "next_x": "ab1efab1cffb47d55fe5dbd92220c717caf106417fc62cb4383e424867a13853",
          "ri": "fe96df5af832e3f563c71fef8c6ad349923972751221f49ddd3a3a34ea8d24ee"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "f1": "4155",
        "f2": "9718",
        "hashes": {
          "yi": "a320d8139f2732517b7831769170b2f97899b37232e870d36cc78e8c046f34a5",
          "next_x": "37be4bf1e2f2eb2a3205d4d1f47d9da8ae085ad74de32080d4ac1497c8ba1e36",
          "ri": "759cb0bb6e9e398eac0f06fd896c41849c2351cc6fcf44476418ea6c47098a56"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 4,
    "alumno": "Alumno #4",
    "titulo": "Algoritmo de Multiplicador Constante",
    "categoria": "Métodos No Congruenciales (Aritméticos)",
    "descripcion": "A diferencia de Productos Medios, aquí el factor <strong>a = 6965</strong> permanece <strong>constante</strong> en todos los pasos. En cada iteración se multiplica <strong>Y<sub>i</sub> = a × X<sub>i</sub></strong>, se toman los 4 dígitos centrales para el nuevo <strong>X<sub>i+1</sub></strong> y se repite con el mismo factor a.",
    "parametros": [
      {
        "label": "Constante Fija",
        "value": "a = 6965"
      },
      {
        "label": "Semilla Inicial",
        "value": "X₀ = 9803"
      },
      {
        "label": "Dígitos",
        "value": "D = 4"
      },
      {
        "label": "Iteraciones",
        "value": "n = 6"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 13, 14 y 15",
      "texto": "En el algoritmo de multiplicador constante se selecciona una constante a de D dígitos y una semilla X0. Se multiplican, se seleccionan los D dígitos centrales para el nuevo término, y la constante a se vuelve a multiplicar por dicho nuevo término."
    },
    "hasQuestions": false,
    "columnas": [
      "i",
      "Constante (a)",
      "Semilla (Xᵢ)",
      "Yᵢ = a × Xᵢ",
      "Dígitos Centrales (Xᵢ₊₁)",
      "rᵢ"
    ],
    "periodo": "No cicla en las primeras 6 iteraciones.",
    "filas": [
      {
        "i": 0,
        "a": "6965",
        "xi": "9803",
        "hashes": {
          "yi": "db9f5321c9159958ab7c0a55cf355c79a183e57017d254ce4b4fb93d9de2aff4",
          "next_x": "db64e091a62d0a35b76294f0dc4ce25c1a7d43ecc81a92eb8621c0ef559696a4",
          "ri": "3622afc32c18e4310fd491e9ed34569e934be99f46d8b625e0dbcff1eb943723"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "a": "6965",
        "xi": "2778",
        "hashes": {
          "yi": "130c345a20b6530470e90a1acbd7fd3be21cce92a06247430370cb52721dbbe9",
          "next_x": "e09aad55ac6a3eb9c7b02eaf6bab6a347791bb328bf3bd1679c7fa6b07f1cde3",
          "ri": "b73bb2a4b5510dee99fbdf21a0a5079d5824abd1ee03192d449f24f86558f934"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "a": "6965",
        "xi": "3487",
        "hashes": {
          "yi": "2770f392c740bd070e29fb81b82a0961a8c50991f8e9a4cf933de2bd2496fe45",
          "next_x": "b5ad44c03b1968092ad39b6ba57df00a019d4ca697fdc184ac99ec4a454a5a2f",
          "ri": "809a965e00d49794f3b4d91635fef91c3ed8f3555fafbfdcfecf59a7c2478953"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "a": "6965",
        "xi": "2869",
        "hashes": {
          "yi": "218e31848843a231be00265663084dbe29aa236a6105c363065f9d307b24bfb1",
          "next_x": "46784491ae7e9a97b42f92748ed216b4d212c8351e94364437db43bb1627ee7e",
          "ri": "22d16e01dff88afc3749ddbae734601faa5a3d3ddd43801b7f75dc3f1a9797ad"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "a": "6965",
        "xi": "9825",
        "hashes": {
          "yi": "ddf175e14af839e4e5870da437c991b6ef6ef5d4d723ba230f8bf620e40ab170",
          "next_x": "28e5214044e3ebde6a552efd2c76037235691b7f95e58c5d48353bf2ccd8c87d",
          "ri": "554a2e709d2a51f56d2751686b56b00032ab3b29ffe74d5de8e192623b6bfc75"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "a": "6965",
        "xi": "4311",
        "hashes": {
          "yi": "84de0999f731ded6537f61215989d8b31013cc07de2a7e3f9ee84469298888e0",
          "next_x": "a1da6c0a8de96703f4bd1ff69680404d6056a04db8217e7f4b037fe6677153bc",
          "ri": "7f1e9411044e057c673fcb5f512f7f436a2f77dac650e7f1b9d29566911449c7"
        },
        "altHashes": {
          "next_x": "ff69e705d2a53b13bf573bbc072096ef94ed7545419ce8ea34060042491c506a"
        },
        "hints": {
          "yi": "Verifica la multiplicación o elevación al cuadrado. Recuerda rellenar con ceros a la izquierda (padding) si el resultado tiene menos de 2D dígitos.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 5,
    "alumno": "Alumno #5",
    "titulo": "Congruencial Lineal Mixto & Teorema de Hull-Dobell",
    "categoria": "Métodos Congruenciales Lineales",
    "descripcion": "Evalúa el generador <strong>X<sub>i+1</sub> = (5X<sub>i</sub> + 7) mod 16</strong> con semilla <strong>X₀ = 7</strong>. Verifica las 3 condiciones de Hull-Dobell para demostrar analíticamente que alcanza período completo (<strong>P = m = 16</strong>), y calcula las iteraciones completas.",
    "parametros": [
      {
        "label": "Semilla",
        "value": "X₀ = 7"
      },
      {
        "label": "Multiplicador",
        "value": "a = 5"
      },
      {
        "label": "Constante Aditiva",
        "value": "c = 7"
      },
      {
        "label": "Módulo",
        "value": "m = 16"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 16 a 21 (Teorema de Hull-Dobell)",
      "texto": "Un generador congruencial mixto <strong>X<sub>i+1</sub> = (a·X<sub>i</sub> + c) mod m</strong> tiene período completo <strong>P = m</strong> si y solo si: 1) c y m son primos relativos (MCD(c,m) = 1); 2) Si q es un número primo divisor de m, entonces (a - 1) es múltiplo de q; 3) Si m es divisible por 4, entonces (a - 1) es múltiplo de 4."
    },
    "hasQuestions": true,
    "questions": [
      {
        "id": "q_hd1",
        "label": "1. ¿Son c = 7 y m = 16 coprimos entre sí? (MCD = 1)",
        "type": "radio",
        "options": [
          "Sí",
          "No"
        ],
        "hash": "9c86e7592e4e72fabe12f7949bd622f0dcd181ae36711e9bf9e6cf6908ab7355",
        "alt_hash": "3cbbd214608f1f15194bebd370f37b2631a14d844293426fedd79cac2eb077a0",
        "hint": "Revisa si la constante aditiva 'c' y el módulo 'm' comparten algún divisor común mayor a 1 (MCD = 1)."
      },
      {
        "id": "q_hd2",
        "label": "2. Los divisores primos de m=16 son {2}. ¿Es (a - 1) = 4 divisible por 2?",
        "type": "radio",
        "options": [
          "Sí",
          "No"
        ],
        "hash": "fe05d926e53d857acf8e57590ad615affdcb15009a455ce134368937e540a92c",
        "alt_hash": "2b1be417dce3648f69d2221f6f0ff8d2d8c054f3d3b24005d3dc0298298edb94",
        "hint": "Calcula los factores primos del módulo 'm' y comprueba si (a - 1) es divisible por cada uno de ellos."
      },
      {
        "id": "q_hd3",
        "label": "3. Dado que m=16 es divisible por 4, ¿es (a - 1) = 4 múltiplo de 4?",
        "type": "radio",
        "options": [
          "Sí",
          "No"
        ],
        "hash": "f3157dde44e41e015dc3c9a3219882d52252a0aece4a8a82e95e77e2a7e199c6",
        "alt_hash": "8ec05bc85017a802a06b8fe7c5442a2830b6de41eee4dcb117099be698a9cede",
        "hint": "Si el módulo 'm' es múltiplo de 4, verifica si (a - 1) también es múltiplo de 4."
      }
    ],
    "columnas": [
      "i",
      "Xᵢ",
      "(5Xᵢ + 7)",
      "Xᵢ₊₁ = (5Xᵢ + 7) mod 16",
      "rᵢ = Xᵢ₊₁ / 15"
    ],
    "periodo": "Período Completo P = 16 (Visita todos los 16 enteros sin repetirse antes).",
    "filas": [
      {
        "i": 0,
        "xi": "7",
        "hashes": {
          "expr": "93cb95ec3a93673393ae06d09ca9bb7840a9ea59a61b504b513cb603317e60e8",
          "next_x": "3561c3512e293090bb7ba3b6390cb5454a9f48cfaff889c707cbb5315254359b",
          "ri": "a5ba1207c2052372532e99ef2dc214029e66cc9a1d1dbd873b3158a8a2ae84a9"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "xi": "10",
        "hashes": {
          "expr": "989e7fc16cb39ebdf564688a465944b2d5ad772e8b3f86724c1f554257f44557",
          "next_x": "cf6b15c2bcb09abb0a5d9da8d38f1c657c45670872498a8f0d13ca00383d10a9",
          "ri": "d045b79fe0a8479cb02c4ae78e6835296650dbe87b4b781f0d917f27c8f8bc87"
        },
        "altHashes": {
          "ri": "89bcb70b3f5177fe83b366c6cae2451f1c944dde870e73282f4e042c78bf58e3"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "xi": "9",
        "hashes": {
          "expr": "330569515dc6cca1358234f93c5513c2d20a2b3f5016ea1400ba04a542316e9c",
          "next_x": "c64c6a3b37bb1620507a4bee929ce1635bcb3a1945f955c6ace4fb7478a1cad6",
          "ri": "ae0c27fd5a442e97cf33e653381b04873de342eaec62b7a0cc8d91a69711f6f4"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "xi": "4",
        "hashes": {
          "expr": "d27b2c698d374c72f5c66ab11c8943cf47b85219dce070b6d231ea2a174579be",
          "next_x": "963de3a88a808eada6d9c3f2794b04a3d008af7338e253bf908079e809306121",
          "ri": "96ffd005edfe9f2256802a2034d83f365efa30eafb4e17599b17c3ff1d4a9346"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "xi": "11",
        "hashes": {
          "expr": "1b9f75fc59d4895de51019343390c36e09087bbd71398b8f5f4ab7d75e88067d",
          "next_x": "6778340b4920c834c861d71c4e6d3863e4dab13c22a376c93aea94aa8e7e2c45",
          "ri": "dfdec84aa7ca7e8f21b34707b1679de9c08622da0ac84b5c6f0a5377a4c4bf62"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "xi": "14",
        "hashes": {
          "expr": "de0d1fa57aab14512bbe4dc7a3cb7458f57779dd6517249e04db2e9f4ccbae63",
          "next_x": "a595cdf29b6cf637968d9d91fe2e0151eb2e6bd6989843351cb793d2a9178574",
          "ri": "6ec9d840222f878160d241a36ddf15e288846e452db5813bd3eabca63e46510d"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 6,
        "xi": "13",
        "hashes": {
          "expr": "bdef68a9a363645ee11f8f48786c9a21ec23848d8802d80bf2851df5a30c0bc9",
          "next_x": "4442411398b4f246200c84c86ef6f3d8192a874f064ed6fd5504dbf871b1097c",
          "ri": "0097656eee2290b0f0ccb76174c143087ff1519ec0ce3e8c4b6f663265f03af0"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 7,
        "xi": "8",
        "hashes": {
          "expr": "b7f86970eded40171a52323ee6f9b9c7d4316d0851f709490f4cae6435a4be34",
          "next_x": "77b802eeaa95182c96b843efcff651352841b37504f34c85ab5796e24b90a5ed",
          "ri": "1168b4e853134202cbe8145d4ef4e760dffad036ff1c5cba41111fef9161d0f8"
        },
        "altHashes": {
          "ri": "03bafe32c93d68b2e20f9fbecf7c8f106d0036a2ab408f71588b88870857ef72"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 6,
    "alumno": "Alumno #6",
    "titulo": "Congruencial Lineal: Falla de Hull-Dobell & Período Incompleto",
    "categoria": "Métodos Congruenciales Lineales",
    "descripcion": "Analiza el generador <strong>X<sub>i+1</sub> = (5X<sub>i</sub> + 12) mod 16</strong> con semilla <strong>X₀ = 6</strong>. Identifica por qué falla Hull-Dobell (<strong>MCD(12, 16) = 4 ≠ 1</strong>) y observa cómo la secuencia queda atrapada en un subciclo corto de longitud <strong>P = 4</strong>.",
    "parametros": [
      {
        "label": "Semilla",
        "value": "X₀ = 6"
      },
      {
        "label": "Multiplicador",
        "value": "a = 5"
      },
      {
        "label": "Constante Aditiva",
        "value": "c = 12"
      },
      {
        "label": "Módulo",
        "value": "m = 16"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 16 a 21 (Ejemplos de Período Incompleto)",
      "texto": "Si se viola alguna condición de Hull-Dobell (en este caso, c=12 y m=16 comparten el factor 4, MCD(12,16)=4), el período del generador no alcanza el valor de m y colapsa en un ciclo mucho menor."
    },
    "hasQuestions": true,
    "questions": [
      {
        "id": "q_fail_mcd",
        "label": "¿Cuál es el valor del Máximo Común Divisor entre c=12 y m=16?",
        "type": "input",
        "hash": "6e191de5cee8b645dd05a18e282e2a3bca36dd3401cc9e03a835a81e21faad87",
        "hint": "Calcula el Máximo Común Divisor entre 'c' y 'm'."
      },
      {
        "id": "q_fail_period",
        "label": "¿Cuál es la longitud del período real P alcanzado antes de repetirse?",
        "type": "input",
        "hash": "ec60968f35349d13091068dfc795077cc305844d4047b31fd8cb95f9087b1d38",
        "hint": "Cuenta cuántos números enteros distintos se generan antes de que se repita la semilla inicial."
      }
    ],
    "columnas": [
      "i",
      "Xᵢ",
      "(5Xᵢ + 12)",
      "Xᵢ₊₁ = (5Xᵢ + 12) mod 16",
      "rᵢ = Xᵢ₊₁ / 15"
    ],
    "periodo": "Subperíodo corto de longitud P = 4 (Secuencia cíclica: 6, 10, 14, 2).",
    "filas": [
      {
        "i": 0,
        "xi": "6",
        "hashes": {
          "expr": "d5e9f4f428915d34c6755c9e921bfd15432493b0a153b8b69e063744313db038",
          "next_x": "e48d08b8258c8258cfeef4082dbb76a1056ce9c5fddc6383745f1dfdc5f730a8",
          "ri": "3fe32aea75aa8eb65281a15c776d146c11008aae0acb639a610518e282671f64"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "xi": "10",
        "hashes": {
          "expr": "376a028c03cfa7bfa8c37dba1cf6aad509f26a83f1efd2bfcecee823ef2edca7",
          "next_x": "4ea83bf3c000fecc31283f0c2c4496fa58ad3bde9008475749d244067baf60f2",
          "ri": "cc025c5b12a7b1ed49b5b9b7f34c1b441d28698d81d2dec20dcb01388b0c9433"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "xi": "14",
        "hashes": {
          "expr": "fbb3ded67731e909a81ca1c64de45e79e3c5a45ff7f1286967481b20caa95647",
          "next_x": "809409b1d277735b4707fcdbf2ff8e5eb2219bd1d8fdd37d24f42f8e6653bede",
          "ri": "0e7fb882f461294382fb3f9f9d8a08f7136342074bb1376bb423900304e65aeb"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "xi": "2",
        "hashes": {
          "expr": "1d51a63be4e8c633f987822c26098b3299069992feff61f7139fcce537e87331",
          "next_x": "6dc19c55047c8906a0d3c21c1311b08953da71f5a9e56523748a4338857df907",
          "ri": "b00039f3ef942f7062dcd07b533285a46594e45cb531f9310881cdfac0a8222c"
        },
        "altHashes": {
          "ri": "715b2f3502222129e49777f1df21a3bbd406f81a3e5e07f58cf532f84d4eaed2"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "xi": "6",
        "hashes": {
          "expr": "6a50174b110cdc8a7adc6b9e92979863d2862fa822644fbf9b52392691f73383",
          "next_x": "da6b9906422dbb9a8772ecf2878cefa66dc68229188fb256d787b13b8b4c3aae",
          "ri": "74cdae828da9298a4375021098805c439a6a4ee5cab26104af6b70048f19b3a2"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "xi": "10",
        "hashes": {
          "expr": "2e76a3aea7e647ad88673e5b4ce995a33c003f4932e36da391d8103a85c7ad66",
          "next_x": "720502048959826fb73e9029f9fd846e496f0ac7f73405c65c19dc771434312b",
          "ri": "fb72d701e86424799e0e153402ebaa381217b37ab2623a5d8d956e8e279b26fd"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 7,
    "alumno": "Alumno #7",
    "titulo": "Algoritmo Congruencial Multiplicativo",
    "categoria": "Métodos Congruenciales",
    "descripcion": "Para <strong>X<sub>i+1</sub> = (a · X<sub>i</sub>) mod m</strong>, con <strong>m = 64 = 2<sup>6</sup></strong>, <strong>a = 5</strong> y semilla impar <strong>X₀ = 17</strong>. Calcula el período máximo teórico <strong>P = m / 4 = 16</strong> y genera los términos paso a paso.",
    "parametros": [
      {
        "label": "Semilla (impar)",
        "value": "X₀ = 17"
      },
      {
        "label": "Multiplicador",
        "value": "a = 5"
      },
      {
        "label": "Módulo Binario",
        "value": "m = 64 (2⁶)"
      },
      {
        "label": "Período Teórico",
        "value": "P = m/4 = 16"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 22, 23 y 24",
      "texto": "En el algoritmo congruencial multiplicativo <strong>X<sub>i+1</sub> = (a·X<sub>i</sub>) mod m</strong>. Cuando el módulo es una potencia de 2 (m = 2<sup>g</sup> con g ≥ 3), si la semilla es impar y el multiplicador es de la forma a = 3 + 8k o 5 + 8k, el período máximo alcanzable es <strong>P = m / 4 = 2<sup>g-2</sup></strong>."
    },
    "hasQuestions": true,
    "questions": [
      {
        "id": "q_mcg_pmax",
        "label": "Si m = 64 (g=6), ¿cuál es el período máximo teórico P = m/4?",
        "type": "input",
        "hash": "eff9bb18c6ef7938df6e0e0e08f97f9ed58495ce70f7e7af547c6e6c80396a1b",
        "hint": "Para módulos binarios m = 2^g, el período máximo teórico es P = m / 4."
      }
    ],
    "columnas": [
      "i",
      "Xᵢ",
      "(5 × Xᵢ)",
      "Xᵢ₊₁ = (5Xᵢ) mod 64",
      "rᵢ = Xᵢ₊₁ / 63"
    ],
    "periodo": "Alcanza exactamente el período máximo teórico P = 16.",
    "filas": [
      {
        "i": 0,
        "xi": "17",
        "hashes": {
          "expr": "82aa70400e3af56eaf3d6496d317aca7fe047e5fd0287831480ff48f930bd64f",
          "next_x": "f8426ef6eea00f4dbbd49fce906acd35650911ed44610465bb8766edd3722b92",
          "ri": "3ae36b7c95f679dc0dd51f1a60d2d50334e238c6b1338db744f2a9d7ff4c8c3e"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 1,
        "xi": "21",
        "hashes": {
          "expr": "3cfb821c76498c8951555f741c48bc8fe3e7a49a59d598f7d0d97832144bbaf9",
          "next_x": "b52aad107475b221d8acafe324a1f530eeca4219c9219d15f9edc8cb5bbebb65",
          "ri": "f1dab5cb5898b2d3ed1b7c3e1a68f969cf2ba5a3cccf2757f104c9524aad7408"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "xi": "41",
        "hashes": {
          "expr": "cc24606cc890f9549b10696eb2cdad481742168666376dd5fe9513b6f92701dc",
          "next_x": "08f25c45cb5e917f38c4b677febadf56217f64105a806cec9940f283456b47a7",
          "ri": "16bf006c9f79c1646322b467e40d1a3926e6a09ec301f8ad0696ba7b9bb30782"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "xi": "13",
        "hashes": {
          "expr": "14c37b7be7fa6ac330a75fc237928e79bcecf7ea0ea9a116fd254b005f9b9c6e",
          "next_x": "01ad562eacf96046af3e327d7ee0cd89751a72b0a23b19d670846a5489b04401",
          "ri": "8a76a56b9b0ef73413c3fc3f4b0400d176a1911c09c941e7c00ecc9cd13b9c2d"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "xi": "1",
        "hashes": {
          "expr": "2d3cdf3b2c2171a4825825cb83db9f09d96f3aad7a93748eb54d2ab34835c1ad",
          "next_x": "766c26f6aa1156530cd79aad2fe666b3cbaa342d09d079515992d016eb033677",
          "ri": "a999ef5a6ef2435a4b23109e319cfda44f7463e30ffe543cb747aeaca2335c79"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "xi": "5",
        "hashes": {
          "expr": "e3380139aa819b79705c537f6f343a91dd6c55a23bfb4fa02894bb0ee26c0489",
          "next_x": "b8f320f9fcf59c370900a167cdf2dd522820fda601004a527d3f507efc736f76",
          "ri": "35a918634d503fb30e89ec3e921bf78ebe32b381aa1c3075e284eef985c8fa1e"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  },
  {
    "id": 8,
    "alumno": "Alumno #8",
    "titulo": "Algoritmos Congruenciales Especiales: Aditivo & BBS",
    "categoria": "Métodos Aditivos y Criptográficos",
    "descripcion": "Parte A: Aplica el algoritmo Congruencial Aditivo <strong>X<sub>i</sub> = (X<sub>i-1</sub> + X<sub>i-k</sub>) mod 100</strong> partiendo de una secuencia inicial de k = 5 enteros <strong>[65, 89, 98, 03, 69]</strong>. Parte B: Valida los primos de Blum para Blum, Blum y Shub (BBS).",
    "parametros": [
      {
        "label": "Secuencia Inicial (k=5)",
        "value": "[65, 89, 98, 03, 69]"
      },
      {
        "label": "Módulo Aditivo",
        "value": "m = 100"
      },
      {
        "label": "Primos BBS",
        "value": "p = 7, q = 11"
      },
      {
        "label": "Módulo BBS",
        "value": "m_bbs = p × q = 77"
      }
    ],
    "biblio": {
      "diapositiva": "Diapositivas 25 a 27 (Aditivo) y 31 (Blum, Blum y Shub)",
      "texto": "El algoritmo aditivo suma el término inmediatamente anterior y el término retrasado k posiciones: <strong>X<sub>i</sub> = (X<sub>i-1</sub> + X<sub>i-k</sub>) mod m</strong>. Por su parte, Blum, Blum y Shub (BBS) es un generador criptográficamente seguro donde <strong>X<sub>i+1</sub> = X<sub>i</sub><sup>2</sup> mod m</strong>, con m = p × q y p, q números primos grandes tales que <strong>p ≡ 3 (mod 4)</strong> y <strong>q ≡ 3 (mod 4)</strong>."
    },
    "hasQuestions": true,
    "questions": [
      {
        "id": "q_bbs_cond",
        "label": "¿Cumplen p=7 y q=11 la condición de Blum (7 mod 4 = 3 y 11 mod 4 = 3)?",
        "type": "radio",
        "options": [
          "Sí",
          "No"
        ],
        "hash": "9584faa1da044b5f4d8517c8548545e6194647372ef561c7129ef3ddb082e8ea",
        "alt_hash": "6e4a7ade52e12eef1f208bb72bf842f4689ae9c571709fe1b396efa74941fa95",
        "hint": "Evalúa si tanto p como q dejan resto 3 al dividirlos por 4 (p mod 4 = 3 y q mod 4 = 3)."
      },
      {
        "id": "q_bbs_calc",
        "label": "En BBS, si m = 77 y la semilla es X₀ = 9, ¿cuánto vale X₁ = 9² mod 77?",
        "type": "input",
        "hash": "3dd38af144bd1291355249ee73016bacfc453a5705c50bf910858ca24fc4841b",
        "hint": "Eleva la semilla al cuadrado y calcula el residuo al dividirla por el módulo m = p × q."
      }
    ],
    "columnas": [
      "Paso",
      "Xᵢ₋₁",
      "Xᵢ₋₅",
      "Suma = Xᵢ₋₁ + Xᵢ₋₅",
      "Xᵢ = Suma mod 100",
      "rᵢ = Xᵢ / 99"
    ],
    "periodo": "Generación aditiva modular con retardo k = 5.",
    "filas": [
      {
        "i": 1,
        "x_prev": "69",
        "x_lag": "65",
        "hashes": {
          "expr": "205c5f0e6e886cea735e665f669c5f0364a5b03c2978fbfe9e5ad75533235e77",
          "next_x": "713d30320777842f73e4790e9d08e1ebd5312f336c2e2b412b4ca09e5dba7dca",
          "ri": "4edd0c877ad9f2961229a2a595fd30a8a9f214a01249064b62eaf3d93d6ac330"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 2,
        "x_prev": "34",
        "x_lag": "89",
        "hashes": {
          "expr": "f26700546936d0b976aff98b11eb7ac4c43ce363298fdb34bcfaafc78cbb43e6",
          "next_x": "643c82458e1ef2732cb521d044244a95eb62bacef9e50933bb25cb5e9c0e54da",
          "ri": "f63c5bb65df598fa5f035342adfc4c8aae2bf45e8f2b4529547e1ce014306fff"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 3,
        "x_prev": "23",
        "x_lag": "98",
        "hashes": {
          "expr": "c23caac5821e4c5b400d7d0dc7079e804860474b99fa0576e3c60ecfb4a05313",
          "next_x": "cfa0babbc9b8be6f54a56ad1e8a34e7c7b878b6467ba9001867b1b4ebba4c67e",
          "ri": "7413cee7b4c43c65c915deb81e3ecc21e7a4e01c7d1dbef09c6537ccc7e39728"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 4,
        "x_prev": "21",
        "x_lag": "03",
        "hashes": {
          "expr": "cc5fe7484f458d15d347105aefbecf9f1e560977ac2bfdfa4dd06f2e087d645c",
          "next_x": "1a358b76afadd638070dbcfc24d4ab204ab45dc297ec2e7b0fe9777908e28635",
          "ri": "a2faef3ca20bff33850c1842b904ed0e6eac9408b96e36ba46aefda1e21594ce"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 5,
        "x_prev": "24",
        "x_lag": "69",
        "hashes": {
          "expr": "0afeaf20335586d8bb4050f2f72417e6be2ffcb6fdad6235bf911937abebbd44",
          "next_x": "c5397a84ad791b1a2fdc72965afcb965e6f14f7537d1c01bfd42b9ee7dbcacac",
          "ri": "8915ebe4d9587149af546ace9bdb7da985d30517e42a1c092e066a14860a0078"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      },
      {
        "i": 6,
        "x_prev": "93",
        "x_lag": "34",
        "hashes": {
          "expr": "d5ed68baa09ada9f37dce79c7d7981f9954b358d0c8d8b4d13c41e467e5f8984",
          "next_x": "f5e1103eb5d39736d5d8a35257f8e56c458b913f2941f6fc5233e66c254e407d",
          "ri": "4a900441d0b6bdaa50e69badf3dbb3ec72042884c918c951dda0534f34f0b645"
        },
        "hints": {
          "expr": "Aplica con cuidado la operación aritmética indicada antes de aplicar el módulo.",
          "next_x": "Asegúrate de seleccionar exactamente los D dígitos centrales descartando la misma cantidad de cifras a izquierda y derecha.",
          "ri": "Recuerda que ri se obtiene dividiendo el nuevo término Xi+1 por el factor de normalización (10^D o m - 1)."
        }
      }
    ]
  }
]
};
