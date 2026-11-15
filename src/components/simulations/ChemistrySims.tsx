import React, { useState } from 'react';
import { Play, RotateCcw, Droplets, Zap, CheckCircle2, Flame, Gauge } from 'lucide-react';

interface SimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

// 1. PILE DANIELL SIMULATOR
export const DaniellCellSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const fem = 1.10; // Volts (E° Cu2+/Cu = 0.34 V, E° Zn2+/Zn = -0.76 V)

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Pile Daniell : flux d’électrons, pont salin et f.e.m.');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Chimie · Électrochimie</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fonctionnement de la Pile Daniell (Zn - Cu)</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Circuit électrique :</span>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isActive ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-700'
              }`}
            >
              {isActive ? 'Fermé (Débit)' : 'Ouvert (Hors tension)'}
            </button>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Tension à vide E :</span>
              <span className="font-bold text-emerald-600">{fem.toFixed(2)} V</span>
            </div>
            <div className="text-[11px] text-slate-400">
              E = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 - (-0,76) = 1,10 V
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] space-y-1">
              <div><strong className="text-amber-500">Anode (-) :</strong> Zn(s) → Zn²⁺ + 2e⁻ (Oxydation)</div>
              <div><strong className="text-sky-500">Cathode (+) :</strong> Cu²⁺ + 2e⁻ → Cu(s) (Réduction)</div>
            </div>
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider la compréhension (+30 XP)</span>
          </button>
        </div>

        {/* Schematic Drawing */}
        <div className="lg:col-span-2 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center">
          <div className="flex items-center justify-center gap-6 w-full max-w-md">
            {/* Beaker Zinc */}
            <div className="w-32 h-40 border-2 border-slate-700 rounded-b-xl relative bg-blue-950/20 flex flex-col justify-end p-2">
              <div className="absolute top-2 left-6 w-6 h-32 bg-slate-400 border border-slate-500 rounded-t" />
              <div className="h-24 bg-blue-500/20 rounded-b-lg border-t border-blue-400/40 flex items-center justify-center text-[10px] text-blue-300 font-mono">
                Zn²⁺ + SO₄²⁻
              </div>
              <span className="text-[10px] text-slate-400 mt-1 font-bold">Anode Zn (-)</span>
            </div>

            {/* Salt bridge */}
            <div className="h-16 w-16 border-t-4 border-l-4 border-r-4 border-amber-300/80 rounded-t-xl -mt-20 flex items-center justify-center text-[9px] text-amber-300">
              Pont Salin (KNO₃)
            </div>

            {/* Beaker Copper */}
            <div className="w-32 h-40 border-2 border-slate-700 rounded-b-xl relative bg-blue-950/40 flex flex-col justify-end p-2">
              <div className="absolute top-2 left-6 w-6 h-32 bg-amber-600 border border-amber-700 rounded-t" />
              <div className="h-24 bg-sky-600/30 rounded-b-lg border-t border-sky-400/40 flex items-center justify-center text-[10px] text-sky-300 font-mono">
                Cu²⁺ + SO₄²⁻
              </div>
              <span className="text-[10px] text-slate-400 mt-1 font-bold">Cathode Cu (+)</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 mt-4 font-mono flex items-center gap-2">
            <Zap className={`w-4 h-4 ${isActive ? 'text-amber-400 animate-pulse' : 'text-slate-600'}`} />
            <span>Flux d'électrons e⁻ de l'anode Zn vers la cathode Cu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. BEER-LAMBERT SPECTROPHOTOMETRY SIMULATOR
export const BeerLambertSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [concentration, setConcentration] = useState<number>(0.05); // mol/L
  const [cuvetteWidth, setCuvetteWidth] = useState<number>(1.0); // cm
  const [epsilon, setEpsilon] = useState<number>(20); // L/(mol.cm)
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // A = epsilon * l * C
  const absorbance = epsilon * cuvetteWidth * concentration;
  // Transmittance T = 10^(-A)
  const transmittance = Math.pow(10, -absorbance) * 100;

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Loi de Beer-Lambert : absorbance et transmittance');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Chimie · Spectrophotométrie</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Loi de Beer-Lambert (A = ε · l · C)</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Concentration C (mol/L) :</span>
              <span className="font-bold text-sky-600">{concentration.toFixed(3)} mol/L</span>
            </div>
            <input
              type="range"
              min={0.005}
              max={0.1}
              step={0.005}
              value={concentration}
              onChange={(e) => setConcentration(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Largeur de la cuve l (cm) :</span>
              <span className="font-bold text-sky-600">{cuvetteWidth.toFixed(1)} cm</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={2.5}
              step={0.5}
              value={cuvetteWidth}
              onChange={(e) => setCuvetteWidth(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Absorbance A :</span>
              <span className="font-bold text-emerald-600">{absorbance.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Transmittance T (%) :</span>
              <span className="font-bold text-sky-600">{transmittance.toFixed(1)} %</span>
            </div>
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider la loi de Beer-Lambert (+30 XP)</span>
          </button>
        </div>

        {/* Optical Bench Illustration */}
        <div className="lg:col-span-2 bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {/* Light source */}
            <div className="p-3 bg-amber-500/20 border border-amber-400 rounded-lg text-amber-400 text-xs text-center font-bold">
              Source I₀<br/>100%
            </div>

            {/* Beam before */}
            <div className="w-12 h-2 bg-amber-400 shadow-md" />

            {/* Cuvette */}
            <div
              style={{
                width: `${cuvetteWidth * 45}px`,
                backgroundColor: `rgba(14, 165, 233, ${Math.min(0.9, concentration * 8)})`
              }}
              className="h-28 border-2 border-slate-400 rounded flex items-center justify-center text-[10px] text-white font-bold transition-all shadow-inner"
            >
              C = {concentration.toFixed(3)}
            </div>

            {/* Beam after with lower opacity based on T */}
            <div
              style={{ opacity: Math.max(0.05, transmittance / 100) }}
              className="w-12 h-2 bg-amber-400 transition-opacity"
            />

            {/* Photodetector */}
            <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 font-mono text-center">
              Capteur I<br/>
              <span className="text-emerald-400 font-bold">{transmittance.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
