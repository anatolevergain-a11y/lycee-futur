import React, { useState } from 'react';
import { Play, RotateCcw, Zap, Compass, Activity, Waves, Orbit, CheckCircle2 } from 'lucide-react';

interface SimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

// 1. CIRCUIT RC SIMULATOR
export const CircuitRcSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [resistance, setResistance] = useState<number>(1000); // Ohms
  const [capacitance, setCapacitance] = useState<number>(100); // microFarads
  const [voltage, setVoltage] = useState<number>(5); // Volts
  const [timeState, setTimeState] = useState<number>(0);
  const [mode, setMode] = useState<'charge' | 'discharge'>('charge');
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const tau = (resistance * capacitance) / 1000000; // in seconds
  const currentVc = mode === 'charge'
    ? voltage * (1 - Math.exp(-timeState / Math.max(0.001, tau)))
    : voltage * Math.exp(-timeState / Math.max(0.001, tau));

  const handleSimulate = () => {
    setTimeState(5 * tau);
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Circuit RC : constante de temps τ et régime transitoire');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Physique · Électricité</span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Charge & Décharge du Condensateur (Circuit RC)</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('charge')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              mode === 'charge' ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Charge
          </button>
          <button
            onClick={() => setMode('discharge')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              mode === 'discharge' ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Décharge
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Résistance R (Ω) :</span>
              <span className="font-bold text-sky-600">{resistance} Ω</span>
            </div>
            <input
              type="range"
              min={100}
              max={5000}
              step={100}
              value={resistance}
              onChange={(e) => setResistance(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Capacité C (µF) :</span>
              <span className="font-bold text-sky-600">{capacitance} µF</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={10}
              value={capacitance}
              onChange={(e) => setCapacitance(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Tension du générateur E :</span>
              <span className="font-bold text-sky-600">{voltage} V</span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              step={0.5}
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Constante τ = RC :</span>
              <span className="font-bold text-sky-600">{(tau * 1000).toFixed(1)} ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Régime permanent (5τ) :</span>
              <span className="font-bold text-slate-900 dark:text-white">{(5 * tau * 1000).toFixed(1)} ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Tension instantanée uC :</span>
              <span className="font-bold text-emerald-600">{currentVc.toFixed(2)} V</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleSimulate}
              className="flex-1 py-2 px-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Simuler à 5τ</span>
            </button>
            <button
              onClick={() => setTimeState(0)}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Voltage Graph */}
        <div className="lg:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Courbe de réponse transitoire uC(t)</span>
            <span className="text-sky-400 font-mono">E = {voltage} V</span>
          </div>

          <div className="relative h-56 w-full flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
              {/* Axes and grid */}
              <line x1="30" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="1.5" />
              <line x1="30" y1="20" x2="30" y2="180" stroke="#334155" strokeWidth="1.5" />
              {/* Asymptote E */}
              <line x1="30" y1="30" x2="380" y2="30" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="1" />
              <text x="35" y="25" fill="#ef4444" fontSize="10">E = {voltage}V (100%)</text>
              {/* 63% line for tau */}
              <line x1="30" y1="85" x2="380" y2="85" stroke="#0ea5e9" strokeDasharray="2 2" strokeWidth="1" />
              <text x="35" y="80" fill="#0ea5e9" fontSize="9">63% E à t = τ</text>

              {/* Curve uC(t) */}
              <path
                d={Array.from({ length: 70 }).reduce((acc: string, _, i) => {
                  const tFrac = i / 69;
                  const tSec = tFrac * 5 * tau;
                  const vVal = mode === 'charge'
                    ? voltage * (1 - Math.exp(-tSec / Math.max(0.001, tau)))
                    : voltage * Math.exp(-tSec / Math.max(0.001, tau));
                  const x = 30 + tFrac * 340;
                  const y = 180 - (vVal / Math.max(1, voltage)) * 150;
                  return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                }, '')}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono border-t border-slate-800 pt-2">
            <span>t = 0</span>
            <span>t = τ ({(tau*1000).toFixed(0)} ms)</span>
            <span>t = 5τ ({(5*tau*1000).toFixed(0)} ms)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. DIFFRACTION & YOUNG SIMULATOR
export const DiffractionYoungSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [slitType, setSlitType] = useState<'single' | 'double'>('double');
  const [wavelength, setWavelength] = useState<number>(532); // nm (green)
  const [slitWidth, setSlitWidth] = useState<number>(0.2); // mm
  const [screenDist, setScreenDist] = useState<number>(1.5); // m
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // Interfrange i = lambda * D / a (for double slits) in mm
  const interfrange = (wavelength * 1e-9 * screenDist) / (slitWidth * 1e-3) * 1000;

  const handleTest = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Diffraction & Fentes d’Young : calcul d’interfrange');
      setHasCompleted(true);
    }
  };

  const laserColor = wavelength < 450 ? '#3b82f6' : wavelength < 580 ? '#22c55e' : '#ef4444';

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Physique · Ondes Lumineuses</span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Diffraction & Interférences des Fentes d’Young</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSlitType('single')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
              slitType === 'single' ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Fente simple (Diffraction)
          </button>
          <button
            onClick={() => setSlitType('double')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
              slitType === 'double' ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Fentes doubles (Young)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Longueur d'onde λ :</span>
              <span className="font-bold" style={{ color: laserColor }}>{wavelength} nm</span>
            </div>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setWavelength(405)} className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 font-semibold">Bleu (405nm)</button>
              <button onClick={() => setWavelength(532)} className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700 font-semibold">Vert (532nm)</button>
              <button onClick={() => setWavelength(633)} className="px-2 py-1 text-xs rounded bg-rose-100 text-rose-700 font-semibold">Rouge (633nm)</button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Écartement / Largeur a :</span>
              <span className="font-bold text-sky-600">{slitWidth.toFixed(2)} mm</span>
            </div>
            <input
              type="range"
              min={0.05}
              max={0.5}
              step={0.01}
              value={slitWidth}
              onChange={(e) => setSlitWidth(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Distance fentes-écran D :</span>
              <span className="font-bold text-sky-600">{screenDist.toFixed(1)} m</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={3.0}
              step={0.1}
              value={screenDist}
              onChange={(e) => setScreenDist(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs space-y-1 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Interfrange i = λD/a :</span>
              <span className="font-bold text-emerald-600">{interfrange.toFixed(2)} mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Écart angulaire θ = λ/a :</span>
              <span className="font-bold text-sky-600">{(wavelength * 1e-6 / slitWidth).toFixed(4)} rad</span>
            </div>
          </div>

          <button
            onClick={handleTest}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider l'observation (+30 XP)</span>
          </button>
        </div>

        {/* Visual Optical Screen */}
        <div className="lg:col-span-2 bg-black p-5 rounded-xl flex flex-col justify-between items-center text-center">
          <span className="text-xs text-slate-400">Figure d'interférence lumineuse sur l'écran d'observation</span>

          {/* Render Interference pattern with SVG gradient bars */}
          <div className="w-full h-36 my-auto flex items-center justify-center overflow-hidden px-2">
            <div className="w-full h-24 flex items-center justify-center">
              {Array.from({ length: 35 }).map((_, idx) => {
                const distFromCenter = Math.abs(idx - 17);
                // Young fringe modulation: cos^2 factor + sinc envelope
                const intensity = Math.pow(Math.cos(distFromCenter * 0.45 * (0.2 / slitWidth)), 2) * Math.max(0.05, 1 - distFromCenter * 0.05);
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: laserColor,
                      opacity: Math.max(0.02, intensity),
                      width: `${Math.max(2, interfrange * 2.5)}px`,
                      height: '80px',
                      margin: '0 1px'
                    }}
                    className="rounded-full shadow-lg"
                  />
                );
              })}
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-4">
            <span>Frange centrale d'ordre p = 0</span>
            <span>•</span>
            <span style={{ color: laserColor }}>Interfrange i = {interfrange.toFixed(2)} mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. SNELL-DESCARTES & REFRACTION SIMULATOR
export const SnellDescartesSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [n1, setN1] = useState<number>(1.00); // Air
  const [n2, setN2] = useState<number>(1.33); // Water
  const [angleI1, setAngleI1] = useState<number>(30); // degrees
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // Critical angle if n1 > n2: sin(i_lim) = n2 / n1
  const isTotalReflectionPossible = n1 > n2;
  const criticalAngleDeg = isTotalReflectionPossible ? (Math.asin(n2 / n1) * 180) / Math.PI : 90;
  const isTotalReflection = isTotalReflectionPossible && angleI1 > criticalAngleDeg;

  // Refracted angle i2: sin(i2) = (n1 / n2) * sin(i1)
  const sinI2 = (n1 / n2) * Math.sin((angleI1 * Math.PI) / 180);
  const angleI2Deg = isTotalReflection ? 0 : (Math.asin(Math.min(1, Math.max(-1, sinI2))) * 180) / Math.PI;

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Snell-Descartes : réfraction et réflexion totale');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Physique · Optique Géométrique</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Lois de Snell-Descartes & Réflexion Totale</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <label className="font-semibold text-slate-700 dark:text-slate-300">Milieu 1 (Incident) :</label>
            <select
              value={n1}
              onChange={(e) => setN1(Number(e.target.value))}
              className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            >
              <option value={1.00}>Air (n = 1,00)</option>
              <option value={1.33}>Eau (n = 1,33)</option>
              <option value={1.50}>Verre crown (n = 1,50)</option>
              <option value={2.42}>Diamant (n = 2,42)</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-slate-700 dark:text-slate-300">Milieu 2 (Réfracté) :</label>
            <select
              value={n2}
              onChange={(e) => setN2(Number(e.target.value))}
              className="w-full mt-1 p-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            >
              <option value={1.00}>Air (n = 1,00)</option>
              <option value={1.33}>Eau (n = 1,33)</option>
              <option value={1.50}>Verre crown (n = 1,50)</option>
              <option value={2.42}>Diamant (n = 2,42)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Angle d'incidence i1 :</span>
              <span className="font-bold text-sky-600">{angleI1}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={89}
              value={angleI1}
              onChange={(e) => setAngleI1(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Angle de réfraction i2 :</span>
              <span className={`font-bold ${isTotalReflection ? 'text-rose-500' : 'text-emerald-500'}`}>
                {isTotalReflection ? 'Réflexion Totale !' : `${angleI2Deg.toFixed(1)}°`}
              </span>
            </div>
            {isTotalReflectionPossible && (
              <div className="flex justify-between text-slate-400">
                <span>Angle limite i_lim :</span>
                <span>{criticalAngleDeg.toFixed(1)}°</span>
              </div>
            )}
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider l'expérience (+30 XP)</span>
          </button>
        </div>

        {/* Optical ray drawing SVG */}
        <div className="lg:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 relative flex items-center justify-center">
          <svg className="w-full h-64" viewBox="0 0 300 200">
            {/* Dioptre interface */}
            <rect x="0" y="0" width="300" height="100" fill="#0f172a" />
            <rect x="0" y="100" width="300" height="100" fill="#1e293b" />
            <line x1="0" y1="100" x2="300" y2="100" stroke="#64748b" strokeWidth="1" />
            {/* Normale */}
            <line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1" />
            <text x="155" y="30" fill="#94a3b8" fontSize="9">Normale</text>
            <text x="10" y="25" fill="#38bdf8" fontSize="10">Milieu 1 (n = {n1})</text>
            <text x="10" y="125" fill="#38bdf8" fontSize="10">Milieu 2 (n = {n2})</text>

            {/* Incident Ray */}
            {(() => {
              const rad1 = (angleI1 * Math.PI) / 180;
              const xStart = 150 - 90 * Math.sin(rad1);
              const yStart = 100 - 90 * Math.cos(rad1);
              return <line x1={xStart} y1={yStart} x2="150" y2="100" stroke="#ef4444" strokeWidth="2.5" />;
            })()}

            {/* Refracted or Total Reflected Ray */}
            {isTotalReflection ? (
              // Reflected ray into medium 1
              (() => {
                const radRef = (angleI1 * Math.PI) / 180;
                const xEnd = 150 + 90 * Math.sin(radRef);
                const yEnd = 100 - 90 * Math.cos(radRef);
                return <line x1="150" y1="100" x2={xEnd} y2={yEnd} stroke="#f59e0b" strokeWidth="2.5" />;
              })()
            ) : (
              // Refracted ray into medium 2
              (() => {
                const rad2 = (angleI2Deg * Math.PI) / 180;
                const xEnd = 150 + 90 * Math.sin(rad2);
                const yEnd = 100 + 90 * Math.cos(rad2);
                return <line x1="150" y1="100" x2={xEnd} y2={yEnd} stroke="#22c55e" strokeWidth="2.5" />;
              })()
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

// 4. KEPLER ORBIT SIMULATOR
export const KeplerOrbitSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [altitudeKm, setAltitudeKm] = useState<number>(400); // 400 km (ISS)
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const R_EARTH = 6371; // km
  const r_total_km = R_EARTH + altitudeKm;
  // v = sqrt(GM / r) with GM = 3.986e5 km^3/s^2
  const speedKms = Math.sqrt(398600 / r_total_km);
  // T = 2 * pi * sqrt(r^3 / GM) in seconds
  const periodMinutes = (2 * Math.PI * Math.sqrt(Math.pow(r_total_km, 3) / 398600)) / 60;

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Mécanique Céleste & Lois de Kepler');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Physique · Mécanique Céleste</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Orbite Circulaire & 3e Loi de Kepler</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Altitude orbitale h :</span>
              <span className="font-bold text-sky-600">{altitudeKm} km</span>
            </div>
            <input
              type="range"
              min={200}
              max={36000}
              step={200}
              value={altitudeKm}
              onChange={(e) => setAltitudeKm(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>400 km (ISS)</span>
              <span>20 000 km (GPS)</span>
              <span>35 786 km (Géo)</span>
            </div>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">Rayon orbital r :</span>
              <span className="font-bold text-slate-900 dark:text-white">{r_total_km.toLocaleString()} km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Vitesse orbitale v :</span>
              <span className="font-bold text-sky-600">{speedKms.toFixed(2)} km/s ({(speedKms * 3600).toFixed(0)} km/h)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Période T :</span>
              <span className="font-bold text-emerald-600">
                {periodMinutes > 120 ? `${(periodMinutes / 60).toFixed(1)} h` : `${periodMinutes.toFixed(1)} min`}
              </span>
            </div>
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider l'orbite (+30 XP)</span>
          </button>
        </div>

        {/* Orbit Visualization SVG */}
        <div className="lg:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-center relative">
          <svg className="w-64 h-64" viewBox="0 0 200 200">
            {/* Orbit Circle */}
            <circle cx="100" cy="100" r={Math.min(90, 40 + (altitudeKm / 36000) * 50)} fill="none" stroke="#0ea5e9" strokeDasharray="3 3" strokeWidth="1.5" />
            {/* Earth */}
            <circle cx="100" cy="100" r="30" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="100" y="104" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">Terre</text>

            {/* Satellite marker */}
            <circle
              cx={100 + Math.min(90, 40 + (altitudeKm / 36000) * 50)}
              cy="100"
              r="4"
              fill="#f59e0b"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
