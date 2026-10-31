import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Droplets, Info, CheckCircle2 } from 'lucide-react';

interface TitrationSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

export const TitrationSim: React.FC<TitrationSimProps> = ({ onGainXp }) => {
  // Volume of base added in mL (0 to 25 mL)
  const [volumeAdded, setVolumeAdded] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [flowRate, setFlowRate] = useState<'slow' | 'fast'>('slow');
  const [indicator, setIndicator] = useState<'bbt' | 'phenolphthalein'>('bbt');
  const [showTangents, setShowTangents] = useState<boolean>(false);
  const [showDerivative, setShowDerivative] = useState<boolean>(true);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // Constants
  const V_A = 10.0; // mL
  const C_B = 0.10; // mol/L
  const V_E = 12.5; // Equivalence volume in mL (so C_A = 0.125 mol/L)

  // Calculate pH for weak acid (acetic acid pKa = 4.75) titrated by strong base NaOH
  const getPhAtVolume = (v: number): number => {
    if (v <= 0) return 2.88;
    if (v < V_E) {
      // Buffer zone: Henderson-Hasselbalch approx: pH = pKa + log([A-]/[HA]) = pKa + log(v / (V_E - v))
      const ratio = Math.max(0.001, v / (V_E - v));
      return Math.min(6.5, Math.max(2.9, 4.75 + Math.log10(ratio)));
    } else if (Math.abs(v - V_E) <= 0.05) {
      return 8.72; // pH at equivalence
    } else {
      // Excess of OH-: [OH-] = C_B * (v - V_E) / (V_A + v)
      const excess = (C_B * (v - V_E)) / (V_A + v);
      const pOH = -Math.log10(excess);
      return Math.min(13.2, 14 - pOH);
    }
  };

  const currentPh = getPhAtVolume(volumeAdded);

  // Derivative dpH/dVB estimation
  const getDerivativeAtVolume = (v: number): number => {
    const delta = 0.1;
    const ph1 = getPhAtVolume(Math.max(0, v - delta));
    const ph2 = getPhAtVolume(v + delta);
    return (ph2 - ph1) / (2 * delta);
  };

  // Color in Erlenmeyer flask
  const getSolutionColor = (ph: number): { bg: string; name: string } => {
    if (indicator === 'bbt') {
      // Bromothymol blue: Yellow (pH < 6.0), Green (6.0 - 7.6), Blue (pH > 7.6)
      if (ph < 6.0) return { bg: 'bg-amber-300/80', name: 'Jaune (Milieu acide)' };
      if (ph <= 7.6) return { bg: 'bg-emerald-400/85', name: 'Vert (Virage / Zone de neutralité)' };
      return { bg: 'bg-blue-500/85', name: 'Bleu (Milieu basique)' };
    } else {
      // Phenolphthalein: Colorless (pH < 8.2), In-between, Bright fuchsia (pH > 8.2)
      if (ph < 8.2) return { bg: 'bg-slate-100/40', name: 'Incolore (pH < 8.2)' };
      if (ph <= 9.0) return { bg: 'bg-pink-300/60', name: 'Rose pâle (Virage à l\'équivalence)' };
      return { bg: 'bg-pink-600/85', name: 'Rose fuchsia vif (Milieu basique)' };
    }
  };

  const solutionStyle = getSolutionColor(currentPh);

  // Animation loop
  useEffect(() => {
    let interval: any;
    if (isRunning) {
      const step = flowRate === 'slow' ? 0.1 : 0.4;
      interval = setInterval(() => {
        setVolumeAdded((prev) => {
          if (prev >= 25) {
            setIsRunning(false);
            return 25;
          }
          const next = Math.min(25, +(prev + step).toFixed(2));
          if (next >= V_E && !hasCompleted) {
            setHasCompleted(true);
            onGainXp?.(50, 'Équivalence acido-basique franchie !');
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, flowRate, hasCompleted, onGainXp]);

  const resetSim = () => {
    setIsRunning(false);
    setVolumeAdded(0);
  };

  const addOneDrop = () => {
    setVolumeAdded((prev) => {
      const next = Math.min(25, +(prev + 0.1).toFixed(2));
      if (next >= V_E && !hasCompleted) {
        setHasCompleted(true);
        onGainXp?.(50, 'Équivalence franchie au goutte-à-goutte !');
      }
      return next;
    });
  };

  // SVG dimensions for chart
  const width = 460;
  const height = 260;
  const padding = 36;
  const plotW = width - padding * 2;
  const plotH = height - padding * 2;

  const toX = (v: number) => padding + (v / 25) * plotW;
  const toY = (ph: number) => height - padding - ((ph - 2) / 12) * plotH;
  const toDerivY = (d: number) => height - padding - (Math.min(d, 15) / 15) * plotH;

  // Build SVG path for pH curve up to current volume
  const points: [number, number][] = [];
  const derivPoints: [number, number][] = [];
  for (let v = 0; v <= volumeAdded; v += 0.2) {
    points.push([toX(v), toY(getPhAtVolume(v))]);
    derivPoints.push([toX(v), toDerivY(getDerivativeAtVolume(v))]);
  }
  const pathD = points.length > 0 ? `M ${points.map((p) => `${p[0]},${p[1]}`).join(' L ')}` : '';
  const derivPathD = derivPoints.length > 0 ? `M ${derivPoints.map((p) => `${p[0]},${p[1]}`).join(' L ')}` : '';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Simulation Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>CHIMIE TERMINALE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>SIMULATEUR DE TITRAGE pH-MÉTRIQUE</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Dosage de l'acide acétique par la soude NaOH
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTangents(!showTangents)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showTangents
                ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Méthode des Tangentes {showTangents ? 'Actif' : 'Masqué'}
          </button>
          <button
            onClick={() => setShowDerivative(!showDerivative)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showDerivative
                ? 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Dérivée dpH/dV {showDerivative ? 'Actif' : 'Masqué'}
          </button>
        </div>
      </div>

      {/* Main Simulation Stage: 2-Zone Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
        {/* Left Zone: Interactive Apparatus Visual (Burette + Erlenmeyer) */}
        <div className="lg:col-span-5 p-6 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-950/40 min-h-[380px]">
          <div className="relative w-64 h-[320px] flex flex-col items-center">
            {/* Burette top & tube */}
            <div className="w-10 h-32 border-2 border-slate-400 dark:border-slate-600 rounded-t-md relative bg-white/70 dark:bg-slate-800/70 overflow-hidden shadow-inner flex flex-col justify-end">
              {/* Solution inside burette decreases */}
              <div
                className="w-full bg-sky-200/70 dark:bg-sky-400/50 transition-all duration-150"
                style={{ height: `${Math.max(0, 100 - (volumeAdded / 25) * 100)}%` }}
              />
              {/* Graduation markings */}
              <div className="absolute inset-0 flex flex-col justify-between py-1 px-1 pointer-events-none opacity-50">
                <span className="text-[8px] font-mono">0 mL</span>
                <span className="text-[8px] font-mono">10</span>
                <span className="text-[8px] font-mono">20</span>
                <span className="text-[8px] font-mono">25 mL</span>
              </div>
            </div>

            {/* Burette Tap / Valve */}
            <div className="w-6 h-6 bg-slate-700 dark:bg-slate-500 rounded relative -my-1 z-10 flex items-center justify-center shadow">
              <div
                className="w-10 h-2 bg-slate-900 dark:bg-slate-300 rounded cursor-pointer transition-transform duration-200"
                style={{ transform: isRunning ? 'rotate(90deg)' : 'rotate(0deg)' }}
                onClick={() => setIsRunning(!isRunning)}
                title="Robinet de la burette (Cliquer pour ouvrir/fermer)"
              />
            </div>

            {/* Droplet area */}
            <div className="h-10 w-4 relative flex items-center justify-center">
              {isRunning && (
                <div className="w-2 h-2.5 bg-sky-400 rounded-full animate-bounce mt-2 shadow-sm" />
              )}
            </div>

            {/* Erlenmeyer Flask */}
            <div className="w-36 h-36 relative flex items-end justify-center">
              {/* Flask Glass Outline (SVG) */}
              <svg viewBox="0 0 120 120" className="w-full h-full absolute inset-0 z-10 pointer-events-none">
                <path
                  d="M 46 10 L 46 35 L 14 105 A 8 8 0 0 0 20 115 L 100 115 A 8 8 0 0 0 106 105 L 74 35 L 74 10 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-slate-400 dark:text-slate-500"
                />
              </svg>

              {/* Liquid inside flask with reactive color */}
              <div
                className={`w-[85%] h-16 rounded-b-2xl mb-1.5 transition-colors duration-300 ${solutionStyle.bg} flex flex-col items-center justify-center`}
              >
                {/* Magnetic stirring pill */}
                <div
                  className={`w-5 h-1.5 bg-white dark:bg-slate-200 rounded-full shadow-sm ${
                    isRunning ? 'animate-spin' : ''
                  }`}
                />
              </div>

              {/* pH Probe dipped in */}
              <div className="absolute top-4 right-10 w-2.5 h-20 bg-slate-800 dark:bg-slate-600 rounded-t z-20 border border-slate-700">
                <div className="w-full h-2.5 bg-amber-400 rounded-b mt-auto" />
              </div>
            </div>
          </div>

          {/* Indicator Info Banner */}
          <div className="mt-2 text-center">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Teinte de la solution : <span className="font-semibold text-sky-600 dark:text-sky-400">{solutionStyle.name}</span>
            </span>
          </div>
        </div>

        {/* Right Zone: Real-Time pH & Derivative Curve */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Courbe en direct : pH = f(V_B)
              </span>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-sky-600 dark:text-sky-400 font-bold">
                  V_B versé : {volumeAdded.toFixed(1)} mL
                </span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                  pH : {currentPh.toFixed(2)}
                </span>
              </div>
            </div>

            {/* SVG Plot */}
            <div className="relative w-full h-64 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 p-1">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                {/* Axes and Grid Lines */}
                <line
                  x1={padding}
                  y1={height - padding}
                  x2={width - padding}
                  y2={height - padding}
                  stroke="currentColor"
                  className="text-slate-300 dark:text-slate-700"
                  strokeWidth="1.5"
                />
                <line
                  x1={padding}
                  y1={padding}
                  x2={padding}
                  y2={height - padding}
                  stroke="currentColor"
                  className="text-slate-300 dark:text-slate-700"
                  strokeWidth="1.5"
                />

                {/* Grid horizontal ticks: pH = 2, 4, 6, 8, 10, 12, 14 */}
                {[2, 4, 6, 8, 10, 12, 14].map((pVal) => (
                  <g key={pVal}>
                    <line
                      x1={padding}
                      y1={toY(pVal)}
                      x2={width - padding}
                      y2={toY(pVal)}
                      stroke="currentColor"
                      strokeDasharray="2 2"
                      className="text-slate-200 dark:text-slate-800"
                    />
                    <text
                      x={padding - 6}
                      y={toY(pVal) + 4}
                      textAnchor="end"
                      className="text-[10px] fill-slate-400 font-mono"
                    >
                      {pVal}
                    </text>
                  </g>
                ))}

                {/* Grid vertical ticks: V_B = 5, 10, 15, 20, 25 */}
                {[5, 10, 12.5, 15, 20, 25].map((vVal) => (
                  <g key={vVal}>
                    <line
                      x1={toX(vVal)}
                      y1={padding}
                      x2={toX(vVal)}
                      y2={height - padding}
                      stroke="currentColor"
                      strokeDasharray={vVal === 12.5 ? '4 2' : '2 2'}
                      className={vVal === 12.5 ? 'text-amber-400/80 dark:text-amber-500/80' : 'text-slate-200 dark:text-slate-800'}
                    />
                    <text
                      x={toX(vVal)}
                      y={height - padding + 14}
                      textAnchor="middle"
                      className={`text-[9px] font-mono ${
                        vVal === 12.5 ? 'fill-amber-600 dark:fill-amber-400 font-bold' : 'fill-slate-400'
                      }`}
                    >
                      {vVal === 12.5 ? 'V_E' : `${vVal}`}
                    </text>
                  </g>
                ))}

                {/* Equivalence Marker Line & Point */}
                {volumeAdded >= V_E && (
                  <g>
                    <circle
                      cx={toX(V_E)}
                      cy={toY(8.72)}
                      r={4.5}
                      className="fill-amber-500 stroke-white stroke-2"
                    />
                    <text
                      x={toX(V_E) + 8}
                      y={toY(8.72) - 4}
                      className="text-[10px] font-bold fill-amber-600 dark:fill-amber-400"
                    >
                      E(12.5 mL ; 8.72)
                    </text>
                  </g>
                )}

                {/* Tangent Method Parallel lines overlay */}
                {showTangents && (
                  <g className="opacity-75">
                    {/* Lower tangent */}
                    <line
                      x1={toX(4)}
                      y1={toY(3.6)}
                      x2={toX(11)}
                      y2={toY(5.2)}
                      stroke="#0284c7"
                      strokeWidth="1.5"
                    />
                    {/* Upper tangent */}
                    <line
                      x1={toX(14)}
                      y1={toY(11.8)}
                      x2={toX(21)}
                      y2={toY(12.6)}
                      stroke="#0284c7"
                      strokeWidth="1.5"
                    />
                    {/* Median tangent */}
                    <line
                      x1={toX(9)}
                      y1={toY(7.7)}
                      x2={toX(16)}
                      y2={toY(9.7)}
                      stroke="#d97706"
                      strokeWidth="2"
                    />
                  </g>
                )}

                {/* Derivative Curve dpH/dVB */}
                {showDerivative && derivPoints.length > 1 && (
                  <path
                    d={derivPathD}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                )}

                {/* pH Curve Path */}
                {points.length > 1 && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}

                {/* Current point cursor */}
                <circle
                  cx={toX(volumeAdded)}
                  cy={toY(currentPh)}
                  r={4}
                  className="fill-sky-600 stroke-white stroke-2 animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                  isRunning
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-sky-600 hover:bg-sky-700 text-white'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'hidden' : 'block'}`} />
                <span>{isRunning ? 'Arrêter l\'écoulement' : 'Couler la base'}</span>
              </button>

              <button
                onClick={addOneDrop}
                disabled={volumeAdded >= 25}
                className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1"
              >
                <Droplets className="w-3.5 h-3.5 text-sky-500" />
                <span>+1 Goutte (0.1 mL)</span>
              </button>

              <button
                onClick={resetSim}
                className="p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                title="Réinitialiser le titrage"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Indicator selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">Indicateur :</span>
              <button
                onClick={() => setIndicator('bbt')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  indicator === 'bbt'
                    ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Bleu de Bromothymol (BBT)
              </button>
              <button
                onClick={() => setIndicator('phenolphthalein')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  indicator === 'phenolphthalein'
                    ? 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Phénolphtaléine
              </button>
            </div>
          </div>

          {/* Educational Concept Banner */}
          <div className="mt-4 p-3 bg-sky-50/70 dark:bg-sky-950/30 rounded-lg border border-sky-100 dark:border-sky-900/40 flex items-start gap-3">
            <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
            <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-sky-900 dark:text-sky-300">Équivalence stœchiométrique : </span>
              Pour V_E = 12,5 mL, n(acide) = n(base). Formule :{' '}
              <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                C_A = (C_B × V_E) / V_A = (0,10 × 12,5) / 10,0 = 0,125 mol/L
              </code>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
