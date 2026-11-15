import React, { useState } from 'react';
import { Sparkles, Search, FlaskConical, Atom, Dna, Calculator } from 'lucide-react';
import { TitrationSim } from './TitrationSim';
import { ProjectileSim } from './ProjectileSim';
import { OpticsSim } from './OpticsSim';
import { DnaTranslationSim } from './DnaTranslationSim';
import { SubductionSim } from './SubductionSim';
import { TangentDerivativeSim } from './TangentDerivativeSim';
import { CircuitRcSim, DiffractionYoungSim, SnellDescartesSim, KeplerOrbitSim } from './PhysicsSims';
import { DaniellCellSim, BeerLambertSim } from './ChemistrySims';
import { MyotaticReflexSim, BloodGlucoseSim, CellCycleMitosisSim } from './BiologySims';
import { TrigCircleSim, CobwebPlotSim } from './MathSims';

interface SimulationHubProps {
  onGainXp: (amount: number, reason: string) => void;
  activeSimId?: string;
}

export const SimulationHub: React.FC<SimulationHubProps> = ({ onGainXp, activeSimId: initialSimId }) => {
  const [activeSim, setActiveSim] = useState<string>(initialSimId || 'titration');
  const [filterSubject, setFilterSubject] = useState<'all' | 'physique' | 'chimie' | 'svt' | 'maths'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const SIMULATION_LIST = [
    { id: 'titration', title: '1. Titrage pH-métrique', subject: 'chimie', label: 'Chimie Analytique', desc: 'Burette graduée, acide acétique et soude, tracé pH(V) et virage coloré.' },
    { id: 'projectile', title: '2. Balistique & Gravitation', subject: 'physique', label: 'Mécanique de Newton', desc: 'Tir parabolique, vitesse initiale, angle de tir et portée maximale.' },
    { id: 'optics', title: '3. Banc d’Optique & Lentilles', subject: 'physique', label: 'Optique Géométrique', desc: 'Foyers, relations de conjugaison de Descartes et grossissement.' },
    { id: 'translation_dna', title: '4. Traduction d’ADN & Code Génétique', subject: 'svt', label: 'Biologie Moléculaire', desc: 'ARNm, codons, ribosomes et mutations silencieuses, faux-sens et non-sens.' },
    { id: 'subduction', title: '5. Zone de Subduction & Volcanisme', subject: 'svt', label: 'Tectonique des Plaques', desc: 'Plan de Benioff, hydratation mantellique et fusion partielle de la péridotite.' },
    { id: 'tangent_deriv', title: '6. Tangente & Nombre Dérivé', subject: 'maths', label: 'Analyse & Dérivation', desc: 'Sécante glissante, taux d’accroissement f’(a) et pente de la tangente.' },
    { id: 'circuit_rc', title: '7. Circuit RC : Charge & Décharge', subject: 'physique', label: 'Électricité Transitoire', desc: 'Résistance, condensateur, constante de temps τ et régime permanent à 5τ.' },
    { id: 'diffraction_young', title: '8. Fentes d’Young & Diffraction', subject: 'physique', label: 'Ondes Lumineuses', desc: 'Laser coloré, interfrange i = λD/a et figure d’interférences.' },
    { id: 'snell_descartes', title: '9. Réfraction & Réflexion Totale', subject: 'physique', label: 'Lois de Snell-Descartes', desc: 'Dioptre plan, indices n1 et n2, angle limite et fibres optiques.' },
    { id: 'kepler_orbit', title: '10. Mécanique Céleste & Kepler', subject: 'physique', label: 'Gravitation Keplerienne', desc: 'Orbite de l’ISS et satellites géostationnaires, 3e loi T²/a³ = cste.' },
    { id: 'daniell_cell', title: '11. Pile Daniell Électrochimique', subject: 'chimie', label: 'Oxydoréduction', desc: 'Couples Cu/Zn, pont salin, flux d’électrons et force électromotrice de 1,10 V.' },
    { id: 'beer_lambert', title: '12. Loi de Beer-Lambert (Spectro)', subject: 'chimie', label: 'Dosage Spectrophotométrique', desc: 'Cuve de solution, absorbance A = ε·l·C et transmittance lumineuse.' },
    { id: 'myotatic_reflex', title: '13. Réflexe Myotatique Rotulien', subject: 'svt', label: 'Neurophysiologie', desc: 'Fuseau neuromusculaire, fibre Ia, motoneurone α et contraction réflexe.' },
    { id: 'blood_glucose', title: '14. Régulation de la Glycémie', subject: 'svt', label: 'Homéostasie Pancréatique', desc: 'Insuline, glucagon, îlots de Langerhans et stockage du glycogène hépatique.' },
    { id: 'cell_mitosis', title: '15. Les 4 Phases de la Mitose', subject: 'svt', label: 'Cycle Cellulaire', desc: 'Prophase, Métaphase, Anaphase, Télophase et séparation des chromatides.' },
    { id: 'trig_circle', title: '16. Cercle Trigonométrique 360°', subject: 'maths', label: 'Trigonométrie Circulaire', desc: 'Angles en radians et degrés, projections cos(θ) et sin(θ).' },
    { id: 'cobweb_plot', title: '17. Suites Récurrentes (Cobweb)', subject: 'maths', label: 'Analyse Numérique', desc: 'Itérations graphiques un+1 = f(un), escalier vers le point fixe.' }
  ];

  const filteredSims = SIMULATION_LIST.filter((s) => {
    if (filterSubject !== 'all' && s.subject !== filterSubject) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return s.title.toLowerCase().includes(q) || s.label.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Showcase */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>LABORATOIRE VIRTUEL DE SCIENCES INTERACTIVES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Simulateurs Scientifiques Expérimentaux
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Manipulez les variables expérimentales en temps réel, visualisez les tracés mathématiques, les phénomènes physiques et les mécanismes cellulaires pour une compréhension intuitive.
        </p>

        {/* Filter Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'Tous les simulateurs' },
              { id: 'physique', label: 'Physique' },
              { id: 'chimie', label: 'Chimie' },
              { id: 'svt', label: 'SVT' },
              { id: 'maths', label: 'Maths' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterSubject(f.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  filterSubject === f.id
                    ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un simulateur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Selector Pill Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filteredSims.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSim(s.id)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all whitespace-nowrap shrink-0 ${
              activeSim === s.id
                ? 'bg-sky-600 border-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Render Active Simulator */}
      <div>
        {activeSim === 'titration' && <TitrationSim onGainXp={onGainXp} />}
        {activeSim === 'projectile' && <ProjectileSim onGainXp={onGainXp} />}
        {activeSim === 'optics' && <OpticsSim onGainXp={onGainXp} />}
        {activeSim === 'translation_dna' && <DnaTranslationSim onGainXp={onGainXp} />}
        {activeSim === 'subduction' && <SubductionSim onGainXp={onGainXp} />}
        {activeSim === 'tangent_deriv' && <TangentDerivativeSim onGainXp={onGainXp} />}
        {activeSim === 'circuit_rc' && <CircuitRcSim onGainXp={onGainXp} />}
        {activeSim === 'diffraction_young' && <DiffractionYoungSim onGainXp={onGainXp} />}
        {activeSim === 'snell_descartes' && <SnellDescartesSim onGainXp={onGainXp} />}
        {activeSim === 'kepler_orbit' && <KeplerOrbitSim onGainXp={onGainXp} />}
        {activeSim === 'daniell_cell' && <DaniellCellSim onGainXp={onGainXp} />}
        {activeSim === 'beer_lambert' && <BeerLambertSim onGainXp={onGainXp} />}
        {activeSim === 'myotatic_reflex' && <MyotaticReflexSim onGainXp={onGainXp} />}
        {activeSim === 'blood_glucose' && <BloodGlucoseSim onGainXp={onGainXp} />}
        {activeSim === 'cell_mitosis' && <CellCycleMitosisSim onGainXp={onGainXp} />}
        {activeSim === 'trig_circle' && <TrigCircleSim onGainXp={onGainXp} />}
        {activeSim === 'cobweb_plot' && <CobwebPlotSim onGainXp={onGainXp} />}
      </div>
    </div>
  );
};
