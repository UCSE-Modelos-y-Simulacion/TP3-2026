/**
 * ============================================================================
 * TRABAJO PRÁCTICO Nº 3 - MODELOS Y SIMULACIÓN (UCSE 2026)
 * Motor Gráfico de Visualización en Canvas HTML5
 * 1. Órbita de Estados y Ciclos
 * 2. Gráfico de Dispersión 2D (r_i vs r_{i+1})
 * ============================================================================
 */

window.Visualizadores = {
  /**
   * Configura el tamaño del Canvas considerando el devicePixelRatio para nitidez HD
   */
  setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  },

  /**
   * Dibuja la Órbita de Estados (Grafo dirigido en anillo)
   * Muestra las transiciones X_i -> X_{i+1} y detecta bucles
   */
  dibujarOrbita(canvas, secuencia, infoPeriodo) {
    if (!canvas || !secuencia || secuencia.length < 2) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    // Fondo y rejilla tenue
    ctx.fillStyle = '#060911';
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Obtener valores únicos para posicionar en el círculo
    const uniqueValues = Array.from(new Set(secuencia));
    const totalNodes = uniqueValues.length;

    // Mapa de coordenadas por valor
    const nodeCoords = new Map();
    uniqueValues.forEach((val, idx) => {
      const angle = (idx / totalNodes) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      nodeCoords.set(val, { x, y, angle });
    });

    // Dibujar aristas de transición X_i -> X_{i+1}
    ctx.lineWidth = 1.5;
    for (let i = 0; i < secuencia.length - 1; i++) {
      const from = nodeCoords.get(secuencia[i]);
      const to = nodeCoords.get(secuencia[i + 1]);
      if (!from || !to) continue;

      const isSelfLoop = secuencia[i] === secuencia[i + 1];

      if (isSelfLoop) {
        // Degeneración (lazo sobre sí mismo)
        ctx.strokeStyle = '#f43f5e';
        ctx.fillStyle = 'rgba(244, 63, 94, 0.2)';
        ctx.beginPath();
        const loopRadius = 14;
        const loopX = from.x + loopRadius * Math.cos(from.angle);
        const loopY = from.y + loopRadius * Math.sin(from.angle);
        ctx.arc(loopX, loopY, loopRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      } else {
        // Transición regular con gradiente o color neón
        ctx.strokeStyle = i === secuencia.length - 2 ? '#10b981' : 'rgba(139, 92, 246, 0.45)';
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);

        // Curva suave hacia el centro para evitar solapamientos
        const midX = (from.x + to.x) / 2 + (centerX - (from.x + to.x) / 2) * 0.2;
        const midY = (from.y + to.y) / 2 + (centerY - (from.y + to.y) / 2) * 0.2;
        ctx.quadraticCurveTo(midX, midY, to.x, to.y);
        ctx.stroke();
      }
    }

    // Dibujar nodos
    uniqueValues.forEach((val, idx) => {
      const { x, y } = nodeCoords.get(val);
      const isStart = val === secuencia[0];
      const isCurrent = val === secuencia[secuencia.length - 1];

      ctx.beginPath();
      ctx.arc(x, y, 13, 0, 2 * Math.PI);

      if (isStart) {
        ctx.fillStyle = '#8b5cf6';
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 10;
      } else if (isCurrent) {
        ctx.fillStyle = '#06b6d4';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 10;
      } else {
        ctx.fillStyle = '#1e293b';
        ctx.shadowBlur = 0;
      }
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Texto dentro del nodo
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const label = val.toString().length > 4 ? val.toString().substring(0, 4) : val.toString();
      ctx.fillText(label, x, y);
    });

    // Badge de texto central con información del ciclo
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("Órbita de Transiciones", centerX, centerY - 8);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText(`Estados: ${uniqueValues.length}`, centerX, centerY + 8);
  },

  /**
   * Dibuja el Gráfico de Dispersión 2D (r_i vs r_{i+1})
   * Test visual de hiperplanos e independencia
   */
  dibujarDispersion(canvas, secuenciaR) {
    if (!canvas || !secuenciaR || secuenciaR.length < 2) return;
    const { ctx, width, height } = this.setupCanvas(canvas);

    ctx.clearRect(0, 0, width, height);

    // Fondo
    ctx.fillStyle = '#060911';
    ctx.fillRect(0, 0, width, height);

    const padLeft = 36;
    const padBottom = 28;
    const padTop = 15;
    const padRight = 15;

    const plotW = width - padLeft - padRight;
    const plotH = height - padBottom - padTop;

    // Ejes cartesianos
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.strokeRect(padLeft, padTop, plotW, plotH);

    // Rejilla interna [0.2, 0.4, 0.6, 0.8]
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    for (let step = 0.2; step <= 0.8; step += 0.2) {
      const y = padTop + plotH * (1 - step);
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + plotW, y);
      ctx.stroke();
      ctx.fillText(step.toFixed(1), padLeft - 6, y);

      const x = padLeft + plotW * step;
      ctx.beginPath();
      ctx.moveTo(x, padTop);
      ctx.lineTo(x, padTop + plotH);
      ctx.stroke();
    }

    // Etiquetas de ejes
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("rᵢ", padLeft + plotW / 2, height - 8);

    ctx.save();
    ctx.translate(12, padTop + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("rᵢ₊₁", 0, 0);
    ctx.restore();

    // Líneas entre puntos consecutivos
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i < secuenciaR.length - 1; i++) {
      const rx = secuenciaR[i];
      const ry = secuenciaR[i + 1];
      const px = padLeft + rx * plotW;
      const py = padTop + (1 - ry) * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Dibujar puntos individuales
    for (let i = 0; i < secuenciaR.length - 1; i++) {
      const rx = secuenciaR[i];
      const ry = secuenciaR[i + 1];
      const px = padLeft + rx * plotW;
      const py = padTop + (1 - ry) * plotH;

      ctx.beginPath();
      ctx.arc(px, py, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#06b6d4';
      ctx.shadowColor = '#06b6d4';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
};
