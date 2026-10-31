import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Compass, Zap, Gauge, Info } from 'lucide-react';

interface ProjectileSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

export const ProjectileSim: React.FC<ProjectileSimProps> = ({ onGainXp }) => {
  // Simulation parameters
  const [angleDeg, setAngleDeg] = useState<number>(45); // 0 to 90 degrees
  const [v0, setV0] = useState<number>(20); // 5 to 40 m/s
  const [h0, setH0] = useState<number>(2); // initial height 0 to 15 m
  const [gravity, setGravity] = useState<number>(9.81); // 9.81 Terre, 1.62 Lune, 3.71 Mars
  const [mass, setMass] = useState<number>(1.0); // kg
  const [showVectors, setShowVectors] = useState<boolean>(true);
  const [showEnergy, setShowEnergy] = useState<boolean>(true);

  // Time-driven animation state
  const [time, setTime] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [trajectoryPoints, setTrajectoryPoints] = useState<{ x: number; y: number }[]>([]);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const angleRad = (angleDeg * Math.PI) / 180;
  const vx0 = v0 * Math.cos(angleRad);
  const vy0 = v0 * Math.sin(angleRad);

  // Theoretical Flight properties
  // y(t) = -0.5 * g * t^2 + vy0 * t + h0 = 0 -> quadratic formula for total flight time
  const discriminant = vy0 * vy0 + 2 * gravity * h0;
  const tTotal = (vy0 + Math.sqrt(discriminant)) / gravity;
  const tSummit = vy0 / gravity;
  const hMax = h0 + (vy0 * vy0) / (2 * gravity);
  const rangeMax = vx0 * tTotal;

  // Current values at simulated time t
  const currentT = Math.min(time, tTotal);
  const currentX = vx0 * currentT;
  const currentY = Math.max(0, -0.5 * gravity * currentT * currentT + vy0 * currentT + h0);
  const currentVx = vx0;
  const currentVy = vy0 - gravity * currentT;
  const currentSpeed = Math.sqrt(currentVx * currentVx + currentVy * currentVy);

  // Mechanical energy
  const Ec = 0.5 * mass * currentSpeed * currentSpeed;
  const Epp = mass * gravity * currentY;
  const Em = Ec + Epp;

  // Animation effect
  useEffect(() => {
    let animFrame: number;
    let lastStamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastStamp) lastStamp = timestamp;
      const dt = (timestamp - lastStamp) / 1000;
      lastStamp = timestamp;

      setTime((prevT) => {
        const nextT = prevT + dt * 1.5; // 1.5x time scale
        if (nextT >= tTotal) {
          setIsSimulating(false);
          if (!hasCompleted) {
            setHasCompleted(true);
            onGainXp?.(50, 'Trajectoire parabolique accomplie !');
          }
          return tTotal;
        }
        return nextT;
      });

      if (isSimulating) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    if (isSimulating) {
      animFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [isSimulating, tTotal, hasCompleted, onGainXp]);

  // Update trajectory points
  useEffect(() => {
    if (currentT > 0) {
      setTrajectoryPoints((prev) => [...prev, { x: currentX, y: currentY }]);
    }
  }, [currentX, currentY, currentT]);

  const startOrResume = () => {
    if (time >= tTotal) {
      // restart
      setTime(0);
      setTrajectoryPoints([]);
    }
    setIsSimulating(true);
  };

  const resetSim = () => {
    setIsSimulating(false);
    setTime(0);
    setTrajectoryPoints([]);
  };

  // Canvas / SVG coordinate transforms
  const svgW = 560;
  const svgH = 300;
  const pad = 40;
  const maxViewX = Math.max(45, rangeMax * 1.15);
  const maxViewY = Math.max(25, hMax * 1.25);

  const scaleX = (x: number) => pad + (x / maxViewX) * (svgW - pad * 2);
  const scaleY = (y: number) => svgH - pad - (y / maxViewY) * (svgH - pad * 2);

  // SVG path for completed path
  const pathData = trajectoryPoints.length > 0
    ? `M ${trajectoryPoints.map((pt) => `${scaleX(pt.x)},${scaleY(pt.y)}`).join(' L ')}`
    : '';

  // Full theoretical curve preview
  const previewPoints: [number, number][] = [];
  for (let t = 0; t <= tTotal; t += tTotal / 40) {
    const px = vx0 * t;
    const py = -0.5 * gravity * t * t + vy0 * t + h0;
    previewPoints.push([scaleX(px), scaleY(Math.max(0, py))]);
  }
  const previewPath = `M ${previewPoints.map((p) => `${p[0]},${p[1]}`).join(' L ')}`;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>PHYSIQUE TERMINALE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>SIMULATEUR DE BALISTIQUE & NEWTON</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Mouvement dans le champ de pesanteur uniforme
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowVectors(!showVectors)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showVectors
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            Vecteurs v et a {showVectors ? 'Visibles' : 'Masqués'}
          </button>
          <button
            onClick={() => setShowEnergy(!showEnergy)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showEnergy
                ? 'bg-indigo-500/10 border-indigo-500 text-indigo-700 dark:text-indigo-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            Énergie Mécanique {showEnergy ? 'Visible' : 'Masquée'}
          </button>
        </div>
      </div>

      {/* Main Simulation Viewport (SVG Stage) */}
      <div className="p-6 bg-slate-950 text-white relative">
        {/* Real-time telemetry badges (clean unboxed text) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>Temps : <strong className="text-white">{currentT.toFixed(2)} s</strong></span>
            <span>·</span>
            <span>x(t) = <strong className="text-sky-400">{currentX.toFixed(1)} m</strong></span>
            <span>·</span>
            <span>y(t) = <strong className="text-sky-400">{currentY.toFixed(1)} m</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span>Vitesse ||v|| : <strong className="text-emerald-400">{currentSpeed.toFixed(1)} m/s</strong></span>
            <span>·</span>
            <span>Portée X_max : <strong className="text-amber-400">{rangeMax.toFixed(1)} m</strong></span>
            <span>·</span>
            <span>Flèche H_max : <strong className="text-amber-400">{hMax.toFixed(1)} m</strong></span>
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div className="relative w-full h-72 bg-slate-900/80 rounded-lg border border-slate-800 overflow-hidden">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-full">
            {/* Coordinate axes */}
            <line
              x1={pad}
              y1={svgH - pad}
              x2={svgW - pad / 2}
              y2={svgH - pad}
              stroke="#475569"
              strokeWidth="2"
            />
            <line
              x1={pad}
              y1={svgH - pad}
              x2={pad}
              y2={pad / 2}
              stroke="#475569"
              strokeWidth="2"
            />
            <text x={svgW - pad} y={svgH - pad + 20} className="fill-slate-400 text-[10px] font-mono">
              x (m)
            </text>
            <text x={pad - 25} y={pad} className="fill-slate-400 text-[10px] font-mono">
              y (m)
            </text>

            {/* Grid ticks on ground */}
            {[10, 20, 30, 40, 50].map((gx) => {
              if (gx > maxViewX) return null;
              return (
                <g key={gx}>
                  <line
                    x1={scaleX(gx)}
                    y1={svgH - pad}
                    x2={scaleX(gx)}
                    y2={svgH - pad + 5}
                    stroke="#64748b"
                  />
                  <text
                    x={scaleX(gx)}
                    y={svgH - pad + 18}
                    textAnchor="middle"
                    className="fill-slate-500 text-[9px] font-mono"
                  >
                    {gx}m
                  </text>
                </g>
              );
            })}

            {/* Launch platform height */}
            {h0 > 0 && (
              <line
                x1={scaleX(0)}
                y1={scaleY(0)}
                x2={scaleX(0)}
                y2={scaleY(h0)}
                stroke="#38bdf8"
                strokeWidth="4"
              />
            )}

            {/* Ghost Theoretical Trajectory */}
            <path
              d={previewPath}
              fill="none"
              stroke="#334155"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Active Trajectory Path */}
            {trajectoryPoints.length > 1 && (
              <path
                d={pathData}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}

            {/* Projectile ball */}
            <circle
              cx={scaleX(currentX)}
              cy={scaleY(currentY)}
              r={6}
              className="fill-sky-400 stroke-white stroke-2 shadow-lg"
            />

            {/* Velocity Vector (green arrow) & Acceleration Vector (purple arrow) */}
            {showVectors && (
              <g>
                {/* Velocity Vector v(t) */}
                <line
                  x1={scaleX(currentX)}
                  y1={scaleY(currentY)}
                  x2={scaleX(currentX) + currentVx * 1.5}
                  y2={scaleY(currentY) - currentVy * 1.5}
                  stroke="#10b981"
                  strokeWidth="2.5"
                />
                <circle
                  cx={scaleX(currentX) + currentVx * 1.5}
                  cy={scaleY(currentY) - currentVy * 1.5}
                  r={2.5}
                  fill="#10b981"
                />
                <text
                  x={scaleX(currentX) + currentVx * 1.5 + 4}
                  y={scaleY(currentY) - currentVy * 1.5 - 2}
                  className="fill-emerald-400 text-[9px] font-bold font-mono"
                >
                  v(t)
                </text>

                {/* Acceleration Vector a = g (pointing down) */}
                <line
                  x1={scaleX(currentX)}
                  y1={scaleY(currentY)}
                  x2={scaleX(currentX)}
                  y2={scaleY(currentY) + (gravity / 9.81) * 26}
                  stroke="#c084fc"
                  strokeWidth="2"
                />
                <text
                  x={scaleX(currentX) + 4}
                  y={scaleY(currentY) + (gravity / 9.81) * 26 + 10}
                  className="fill-purple-400 text-[9px] font-bold font-mono"
                >
                  a = g
                </text>
              </g>
            )}

            {/* Apogee / Summit marker */}
            <circle
              cx={scaleX(vx0 * tSummit)}
              cy={scaleY(hMax)}
              r={3}
              fill="#fbbf24"
            />
            <text
              x={scaleX(vx0 * tSummit)}
              y={scaleY(hMax) - 8}
              textAnchor="middle"
              className="fill-amber-400 text-[9px] font-mono font-medium"
            >
              Sommet S ({hMax.toFixed(1)}m)
            </text>
          </svg>
        </div>

        {/* Energy breakdown bar (Conservation de l'énergie mécanique) */}
        {showEnergy && (
          <div className="mt-3 p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="text-slate-400">
                Conservation de l'Énergie Mécanique : <strong className="text-white">Em = {Em.toFixed(1)} J</strong>
              </span>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold">Ec (Cinétique) : {Ec.toFixed(1)} J</span>
                <span className="text-sky-400 font-semibold">Epp (Pesanteur) : {Epp.toFixed(1)} J</span>
              </div>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all duration-75"
                style={{ width: `${(Ec / Em) * 100}%` }}
                title="Énergie Cinétique Ec = 1/2 m v²"
              />
              <div
                className="bg-sky-500 h-full transition-all duration-75"
                style={{ width: `${(Epp / Em) * 100}%` }}
                title="Énergie Potentielle Epp = m g y"
              />
            </div>
          </div>
        )}
      </div>

      {/* Control Deck: Parameter Sliders */}
      <div className="p-6 bg-slate-50 dark:bg-slate-950/40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Angle de tir (α)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{angleDeg}°</span>
          </div>
          <input
            type="range"
            min="5"
            max="85"
            value={angleDeg}
            disabled={isSimulating}
            onChange={(e) => {
              setAngleDeg(+e.target.value);
              setTime(0);
              setTrajectoryPoints([]);
            }}
            className="w-full accent-sky-600 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Vitesse initiale (v₀)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{v0} m/s</span>
          </div>
          <input
            type="range"
            min="5"
            max="35"
            value={v0}
            disabled={isSimulating}
            onChange={(e) => {
              setV0(+e.target.value);
              setTime(0);
              setTrajectoryPoints([]);
            }}
            className="w-full accent-sky-600 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Hauteur initiale (h₀)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{h0} m</span>
          </div>
          <input
            type="range"
            min="0"
            max="15"
            value={h0}
            disabled={isSimulating}
            onChange={(e) => {
              setH0(+e.target.value);
              setTime(0);
              setTrajectoryPoints([]);
            }}
            className="w-full accent-sky-600 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Champ de pesanteur (g)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">
              {gravity === 9.81 ? 'Terre (9.81)' : gravity === 1.62 ? 'Lune (1.62)' : 'Mars (3.71)'} m/s²
            </span>
          </div>
          <select
            value={gravity}
            disabled={isSimulating}
            onChange={(e) => {
              setGravity(+e.target.value);
              setTime(0);
              setTrajectoryPoints([]);
            }}
            className="w-full text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value={9.81}>Terre (g = 9,81 m/s²)</option>
            <option value={3.71}>Mars (g = 3,71 m/s²)</option>
            <option value={1.62}>Lune (g = 1,62 m/s²)</option>
          </select>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={startOrResume}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isSimulating ? 'En cours...' : time >= tTotal ? 'Relancer le tir' : 'Lancer le projectile'}</span>
          </button>
          <button
            onClick={resetSim}
            className="px-3 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
        </div>
        <div className="text-xs text-slate-500 hidden sm:block">
          Modèle théorique : 2ème loi de Newton sans frottements aérodynamiques.
        </div>
      </div>
    </div>
  );
};
