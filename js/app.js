/**
 * ============================================================================
 * TRABAJO PRÁCTICO Nº 3 - MODELOS Y SIMULACIÓN (UCSE 2026)
 * Orquestador Principal de la Plataforma Web Autoevaluativa
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.TP3_DATA;
  if (!data) {
    console.error("Error: No se encontró TP3_DATA.");
    return;
  }

  // Estado global de la aplicación
  let currentExerciseId = 1;
  const progressMap = {};

  // Inicializar estado de cada ejercicio
  data.ejercicios.forEach(ej => {
    progressMap[ej.id] = {
      completed: false,
      score: 0,
      answers: {}
    };
  });

  // Elementos del DOM
  const navList = document.getElementById('exercises-nav');
  const titleEl = document.getElementById('exercise-title');
  const assignedEl = document.getElementById('exercise-assigned');
  const categoryEl = document.getElementById('exercise-category');
  const descEl = document.getElementById('exercise-desc');
  const paramsEl = document.getElementById('exercise-params');
  const biblioCiteEl = document.getElementById('biblio-cite');
  const biblioTextEl = document.getElementById('biblio-text');
  const biblioGuideEl = document.getElementById('biblio-guide');
  const questionsBoxEl = document.getElementById('questions-box');
  const tableHeadEl = document.getElementById('table-head');
  const tableBodyEl = document.getElementById('table-body');
  const scoreBarFillEl = document.getElementById('score-bar-fill');
  const scoreLabelEl = document.getElementById('score-label');
  const feedbackBoxEl = document.getElementById('feedback-box');
  const btnValidar = document.getElementById('btn-validar');
  const btnCertificado = document.getElementById('btn-certificado');
  const canvasOrbita = document.getElementById('canvas-orbita');
  const canvasDispersion = document.getElementById('canvas-dispersion');
  const visPlaceholderOrbita = document.getElementById('vis-placeholder-orbita');
  const visPlaceholderDispersion = document.getElementById('vis-placeholder-dispersion');

  // Modal de Comprobante
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const formCertificado = document.getElementById('form-certificado');
  const studentNombreInput = document.getElementById('student-nombre');
  const studentLegajoInput = document.getElementById('student-legajo');
  const hashPreviewEl = document.getElementById('hash-preview');

  // --------------------------------------------------------------------------
  // 1. Renderizar Sidebar de Navegación
  // --------------------------------------------------------------------------
  function renderSidebar() {
    navList.innerHTML = '';
    data.ejercicios.forEach(ej => {
      const btn = document.createElement('button');
      btn.className = `nav-item ${ej.id === currentExerciseId ? 'active' : ''} ${progressMap[ej.id].completed ? 'completed' : ''}`;
      btn.setAttribute('data-id', ej.id);

      btn.innerHTML = `
        <span class="nav-number">${ej.id.toString().padStart(2, '0')}</span>
        <div class="nav-text">
          <span class="nav-title">${ej.alumno}</span>
          <span class="nav-category">${ej.titulo}</span>
        </div>
        <div class="nav-status-indicator" title="${progressMap[ej.id].completed ? 'Completado (100 pts)' : 'Pendiente'}"></div>
      `;

      btn.addEventListener('click', () => {
        if (currentExerciseId !== ej.id) {
          currentExerciseId = ej.id;
          renderSidebar();
          renderExercise(ej.id);
        }
      });

      navList.appendChild(btn);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Renderizar Ejercicio Actual en Pantalla
  // --------------------------------------------------------------------------
  function renderExercise(id) {
    const ej = data.ejercicios.find(e => e.id === id);
    if (!ej) return;

    // Actualizar cabecera
    titleEl.textContent = ej.titulo;
    assignedEl.textContent = `Asignado a: ${ej.alumno}`;
    categoryEl.textContent = ej.categoria;
    descEl.innerHTML = ej.descripcion;

    // Parámetros
    paramsEl.innerHTML = '';
    ej.parametros.forEach(p => {
      const pill = document.createElement('div');
      pill.className = 'param-pill';
      pill.innerHTML = `<span>${p.label}:</span> <strong>${p.value}</strong>`;
      paramsEl.appendChild(pill);
    });

    // Panel Teórico
    biblioCiteEl.textContent = `📖 ${ej.biblio.diapositiva} (PDF Cátedra)`;
    biblioTextEl.innerHTML = ej.biblio.texto;
    biblioGuideEl.classList.remove('open');

    // Cuestionario Analítico
    if (ej.hasQuestions && ej.questions) {
      questionsBoxEl.style.display = 'block';
      questionsBoxEl.innerHTML = '';
      ej.questions.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'question-item';

        if (q.type === 'radio') {
          const radioInputs = q.options.map(opt => `
            <label class="radio-label">
              <input type="radio" name="${q.id}" value="${opt}">
              ${opt}
            </label>
          `).join('');

          item.innerHTML = `
            <div class="question-label">${q.label}</div>
            <div class="radio-group">${radioInputs}</div>
          `;
        } else {
          item.innerHTML = `
            <div class="question-label">${q.label}</div>
            <div class="question-input-row">
              <input type="text" class="q-input" id="${q.id}" placeholder="Tu respuesta...">
            </div>
          `;
        }
        questionsBoxEl.appendChild(item);
      });
    } else {
      questionsBoxEl.style.display = 'none';
    }

    // Tabla de Cálculo
    renderTable(ej);

    // Actualizar barra de puntaje y feedback
    updateScoreDisplay(id);
    feedbackBoxEl.style.display = 'none';

    // Visualizadores
    if (progressMap[id].completed) {
      dibujarGraficos(ej);
      btnCertificado.disabled = false;
    } else {
      limpiarGraficos();
      btnCertificado.disabled = true;
    }
  }

  // --------------------------------------------------------------------------
  // 3. Renderizar Tabla de Cálculo Dinámica
  // --------------------------------------------------------------------------
  function renderTable(ej) {
    // Encabezados
    tableHeadEl.innerHTML = '';
    const trHead = document.createElement('tr');
    ej.columnas.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col;
      trHead.appendChild(th);
    });
    tableHeadEl.appendChild(trHead);

    // Filas
    tableBodyEl.innerHTML = '';
    ej.filas.forEach((fila, rowIdx) => {
      const tr = document.createElement('tr');

      // Columna de índice/paso
      const tdI = document.createElement('td');
      tdI.className = 'col-i';
      tdI.textContent = fila.i;
      tr.appendChild(tdI);

      // Si tiene columnas fijas (como factor 1, factor 2, X_i anterior, constante a, etc.)
      if (fila.f1 !== undefined && fila.f2 !== undefined) {
        const tdF1 = document.createElement('td');
        tdF1.className = 'col-fixed';
        tdF1.textContent = fila.f1;
        tr.appendChild(tdF1);

        const tdF2 = document.createElement('td');
        tdF2.className = 'col-fixed';
        tdF2.textContent = fila.f2;
        tr.appendChild(tdF2);
      } else if (fila.a !== undefined && fila.xi !== undefined) {
        const tdA = document.createElement('td');
        tdA.className = 'col-fixed';
        tdA.textContent = fila.a;
        tr.appendChild(tdA);

        const tdXi = document.createElement('td');
        tdXi.className = 'col-fixed';
        tdXi.textContent = fila.xi;
        tr.appendChild(tdXi);
      } else if (fila.x_prev !== undefined && fila.x_lag !== undefined) {
        const tdP = document.createElement('td');
        tdP.className = 'col-fixed';
        tdP.textContent = fila.x_prev;
        tr.appendChild(tdP);

        const tdL = document.createElement('td');
        tdL.className = 'col-fixed';
        tdL.textContent = fila.x_lag;
        tr.appendChild(tdL);
      } else if (fila.xi !== undefined) {
        const tdXi = document.createElement('td');
        tdXi.className = 'col-fixed';
        tdXi.textContent = fila.xi;
        tr.appendChild(tdXi);
      }

      // Columnas de inputs para cálculo
      Object.keys(fila.hashes).forEach(key => {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'calc-input';
        input.setAttribute('data-row', rowIdx);
        input.setAttribute('data-field', key);
        input.placeholder = key === 'ri' ? '0.xxxx' : 'Valor...';

        // Si ya había una respuesta guardada, restaurarla
        const savedVal = progressMap[ej.id].answers[`r${rowIdx}_${key}`];
        if (savedVal !== undefined) {
          input.value = savedVal;
        }

        td.appendChild(input);
        tr.appendChild(td);
      });

      tableBodyEl.appendChild(tr);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Normalizador de Cadenas Numéricas para Evaluación Flexible
  // --------------------------------------------------------------------------
  function normalizar(val) {
    if (!val) return '';
    return val.toString().trim().replace(',', '.');
  }

  // --------------------------------------------------------------------------
  // 4. Validador Criptográfico con Web Crypto API (Zero-Knowledge)
  // --------------------------------------------------------------------------
  async function calcularHashItem(ejId, itemKey, valor) {
    const cleanVal = normalizar(valor).toLowerCase();
    const raw = `${ejId}:${itemKey}:${cleanVal}:${data.SALT}`;
    const encoder = new TextEncoder();
    const dataBuf = encoder.encode(raw);
    const hashBuf = await crypto.subtle.digest('SHA-256', dataBuf);
    const hashArray = Array.from(new Uint8Array(hashBuf));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // --------------------------------------------------------------------------
  // 5. Motor de Validación y Autoevaluación
  // --------------------------------------------------------------------------
  async function validarEjercicioActual() {
    const ej = data.ejercicios.find(e => e.id === currentExerciseId);
    if (!ej) return;

    let totalCampos = 0;
    let aciertos = 0;
    const fallas = [];

    // Validar cuestionario analítico si existe
    if (ej.hasQuestions && ej.questions) {
      for (const q of ej.questions) {
        totalCampos++;
        let valor = '';
        if (q.type === 'radio') {
          const checked = document.querySelector(`input[name="${q.id}"]:checked`);
          valor = checked ? checked.value : '';
        } else {
          const inp = document.getElementById(q.id);
          valor = inp ? inp.value.trim() : '';
        }

        progressMap[ej.id].answers[q.id] = valor;

        const actualHash = await calcularHashItem(ej.id, q.id, valor);
        const isCorrect = (actualHash === q.hash || (q.alt_hash && actualHash === q.alt_hash));

        if (isCorrect) {
          aciertos++;
        } else {
          fallas.push({ campo: q.label, hint: q.hint });
        }
      }
    }

    // Validar celdas de la tabla
    const inputs = tableBodyEl.querySelectorAll('.calc-input');
    for (const input of inputs) {
      totalCampos++;
      const rowIdx = parseInt(input.getAttribute('data-row'), 10);
      const field = input.getAttribute('data-field');
      const val = input.value.trim();

      progressMap[ej.id].answers[`r${rowIdx}_${field}`] = val;

      const expectedHash = ej.filas[rowIdx].hashes[field];
      const altHash = ej.filas[rowIdx].altHashes ? ej.filas[rowIdx].altHashes[field] : null;
      const hint = ej.filas[rowIdx].hints[field];

      const itemKey = `r${rowIdx}_${field}`;
      const actualHash = await calcularHashItem(ej.id, itemKey, val);

      const isCorrect = (actualHash === expectedHash || (altHash && actualHash === altHash));

      if (isCorrect) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        aciertos++;
      } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        if (fallas.length < 3) {
          fallas.push({ campo: `Fila ${ej.filas[rowIdx].i} (${field})`, hint });
        }
      }
    }

    // Calcular puntaje
    const score = totalCampos > 0 ? Math.round((aciertos / totalCampos) * 100) : 0;
    progressMap[ej.id].score = score;
    progressMap[ej.id].completed = (score === 100);

    updateScoreDisplay(currentExerciseId);
    renderSidebar();

    // Mensajes didácticos de feedback
    if (score === 100) {
      feedbackBoxEl.className = 'feedback-box success';
      feedbackBoxEl.innerHTML = `
        <strong>🎉 ¡Excelente trabajo!</strong> Has completado el 100% de los cálculos y preguntas de tu ejercicio con total precisión matemática.
        <br>Los visualizadores gráficos se han activado abajo. Ya puedes descargar tu <strong>Comprobante de Aprobación</strong>.
      `;
      dibujarGraficos(ej);
      btnCertificado.disabled = false;
    } else {
      feedbackBoxEl.className = 'feedback-box warning';
      const hintsList = fallas.map(f => `<li><strong>${f.campo}:</strong> ${f.hint}</li>`).join('');
      feedbackBoxEl.innerHTML = `
        <strong>⚠️ Tienes ${aciertos} de ${totalCampos} aciertos (${score} Pts).</strong> Revisa las celdas marcadas en rojo:
        <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.825rem;">${hintsList}</ul>
      `;
      btnCertificado.disabled = true;
    }
  }

  // --------------------------------------------------------------------------
  // 6. Actualizar barra de puntaje
  // --------------------------------------------------------------------------
  function updateScoreDisplay(id) {
    const score = progressMap[id].score || 0;
    scoreBarFillEl.style.width = `${score}%`;
    scoreLabelEl.textContent = `${score} / 100 Pts`;
  }

  // --------------------------------------------------------------------------
  // 7. Renderizado de Gráficos en Canvas
  // --------------------------------------------------------------------------
  function dibujarGraficos(ej) {
    visPlaceholderOrbita.style.display = 'none';
    visPlaceholderDispersion.style.display = 'none';
    canvasOrbita.style.display = 'block';
    canvasDispersion.style.display = 'block';

    const enteros = [];
    const flotantes = [];

    // Semilla inicial
    if (ej.filas[0].xi) {
      enteros.push(parseInt(ej.filas[0].xi, 10));
    } else if (ej.filas[0].f1 && ej.filas[0].f2) {
      enteros.push(parseInt(ej.filas[0].f1, 10));
      enteros.push(parseInt(ej.filas[0].f2, 10));
    } else if (ej.filas[0].x_prev && ej.filas[0].x_lag) {
      enteros.push(parseInt(ej.filas[0].x_lag, 10));
      enteros.push(parseInt(ej.filas[0].x_prev, 10));
    }

    ej.filas.forEach((f, idx) => {
      const nextX = progressMap[ej.id].answers[`r${idx}_next_x`];
      const r = progressMap[ej.id].answers[`r${idx}_ri`];
      if (nextX !== undefined && nextX !== '') {
        const valX = parseInt(nextX, 10);
        if (!isNaN(valX)) enteros.push(valX);
      }
      if (r !== undefined && r !== '') {
        const parsedR = parseFloat(r.replace(',', '.'));
        if (!isNaN(parsedR)) flotantes.push(parsedR);
      }
    });

    window.Visualizadores.dibujarOrbita(canvasOrbita, enteros, ej.periodo);
    window.Visualizadores.dibujarDispersion(canvasDispersion, flotantes);
  }

  function limpiarGraficos() {
    visPlaceholderOrbita.style.display = 'block';
    visPlaceholderDispersion.style.display = 'block';
    canvasOrbita.style.display = 'none';
    canvasDispersion.style.display = 'none';
  }

  // --------------------------------------------------------------------------
  // 8. Generación de Hash Criptográfico SHA-256 (Web Crypto API)
  // --------------------------------------------------------------------------
  async function generarHashSHA256(cadena) {
    const encoder = new TextEncoder();
    const dataBuf = encoder.encode(cadena);
    const hashBuf = await crypto.subtle.digest('SHA-256', dataBuf);
    const hashArray = Array.from(new Uint8Array(hashBuf));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // --------------------------------------------------------------------------
  // 9. Event Listeners de la Interfaz
  // --------------------------------------------------------------------------
  // Desplegable de Teoría
  document.querySelector('.biblio-header').addEventListener('click', () => {
    biblioGuideEl.classList.toggle('open');
  });

  // Botón Comprobar
  btnValidar.addEventListener('click', () => {
    validarEjercicioActual();
  });

  // Botón Abrir Modal Certificado
  btnCertificado.addEventListener('click', async () => {
    const ej = data.ejercicios.find(e => e.id === currentExerciseId);
    if (!progressMap[ej.id].completed) return;

    // Pre-generar un hash preliminar
    const previewPayload = `${ej.id}:${ej.alumno}:${Date.now()}:${data.SALT}`;
    const hash = await generarHashSHA256(previewPayload);
    hashPreviewEl.textContent = `Firma Criptográfica: ${hash.substring(0, 32)}...`;

    modalOverlay.classList.add('active');
  });

  // Cerrar Modal
  modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  // Formulario de Certificado y Descarga de JSON
  formCertificado.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = studentNombreInput.value.trim();
    const legajo = studentLegajoInput.value.trim();

    if (!nombre || !legajo) {
      alert("Por favor completa tu Nombre, Apellido y Legajo/DNI.");
      return;
    }

    const ej = data.ejercicios.find(e => e.id === currentExerciseId);
    const timestamp = new Date().toISOString();

    const certificadoObj = {
      materia: "Modelos y Simulación",
      institucion: "Universidad Católica de Santiago del Estero (UCSE)",
      cicloLectivo: 2026,
      trabajoPractico: "TP Nº 3 - Generación de Números Pseudoaleatorios",
      alumnoAsignado: ej.alumno,
      ejercicioId: ej.id,
      tituloEjercicio: ej.titulo,
      estudiante: {
        nombreCompleto: nombre,
        legajoODni: legajo
      },
      calificacion: "100 / 100 Pts (Aprobado)",
      timestamp: timestamp,
      respuestasRegistradas: progressMap[ej.id].answers
    };

    // Calcular firma de integridad SHA-256
    const payloadParaHash = `${ej.id}:${legajo}:${JSON.stringify(progressMap[ej.id].answers)}:${timestamp}:${data.SALT}`;
    certificadoObj.firmaDigitalSHA256 = await generarHashSHA256(payloadParaHash);

    // Descargar archivo JSON
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(certificadoObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `comprobante_tp3_ejercicio_${ej.id.toString().padStart(2, '0')}_${legajo}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    modalOverlay.classList.remove('active');
  });

  // Redibujar gráficos si se redimensiona la ventana
  window.addEventListener('resize', () => {
    const ej = data.ejercicios.find(e => e.id === currentExerciseId);
    if (ej && progressMap[ej.id].completed) {
      dibujarGraficos(ej);
    }
  });

  // Iniciar plataforma
  renderSidebar();
  renderExercise(1);
});
