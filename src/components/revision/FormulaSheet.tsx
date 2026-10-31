import React, { useState } from 'react';
import { SubjectId } from '../../types';
import { MathFormula } from '../common/MathFormula';
import { Search, Copy, Check, BookOpen, Layers } from 'lucide-react';

interface FormulaEntry {
  subjectId: SubjectId;
  category: string;
  title: string;
  formula: string;
  conditions: string;
  units: string;
}

const MASTER_FORMULAS: FormulaEntry[] = [
  // Maths
  {
    subjectId: 'maths',
    category: 'Analyse & Dérivation',
    title: 'Équation de la tangente à la courbe en x₀',
    formula: 'y = f\'(x₀)(x - x₀) + f(x₀)',
    conditions: 'f dérivable en x₀',
    units: 'Coefficients directeurs sans unité'
  },
  {
    subjectId: 'maths',
    category: 'Analyse & Dérivation',
    title: 'Dérivée de fonctions composées',
    formula: '(v \\circ u)\'(x) = u\'(x) \\times v\'(u(x))',
    conditions: 'u dérivable sur I, v dérivable sur u(I)',
    units: 'Formule opératoire générale'
  },
  {
    subjectId: 'maths',
    category: 'Analyse & Intégration',
    title: 'Intégration par parties (IPP)',
    formula: '\\int_a^b u\'(x)v(x)\\,dx = [u(x)v(x)]_a^b - \\int_a^b u(x)v\'(x)\\,dx',
    conditions: 'u et v de classe C¹ sur [a, b]',
    units: 'Aire sous la courbe en u.a.'
  },
  {
    subjectId: 'maths',
    category: 'Probabilités',
    title: 'Loi Binomiale B(n, p) - Probabilité de k succès',
    formula: 'P(X = k) = \\binom{n}{k} p^k (1 - p)^{n-k}',
    conditions: 'n épreuves de Bernoulli identiques et indépendantes',
    units: 'k ∈ {0, ..., n}, p ∈ [0, 1]'
  },

  // Physique-Chimie
  {
    subjectId: 'physique-chimie',
    category: 'Chimie des solutions',
    title: 'Relation stœchiométrique à l\'équivalence d\'un titrage',
    formula: '\\frac{n_A}{a} = \\frac{n_B(E)}{b} \\iff \\frac{C_A \\cdot V_A}{a} = \\frac{C_B \\cdot V_E}{b}',
    conditions: 'Réaction support totale, rapide et univoque',
    units: 'Concentration en mol/L, Volumes en L ou mL'
  },
  {
    subjectId: 'physique-chimie',
    category: 'Chimie & pH',
    title: 'Définition du potentiel hydrogène (pH)',
    formula: 'pH = -\\log_{10} \\left( \\frac{[H_3O^+]}{c^\\circ} \\right) \\iff [H_3O^+] = c^\\circ \\times 10^{-pH}',
    conditions: 'Solutions aqueuses diluées ([H3O+] ≤ 0,1 mol/L)',
    units: 'pH sans unité, concentration en mol/L (c° = 1 mol/L)'
  },
  {
    subjectId: 'physique-chimie',
    category: 'Mécanique Newtonienne',
    title: 'Deuxième Loi de Newton (Principe Fondamental)',
    formula: '\\sum \\vec{F}_{ext} = \\frac{d\\vec{p}}{dt} = m \\cdot \\vec{a}_G \\quad (\\text{si } m = \\text{cte})',
    conditions: 'Référentiel galiléen, système ponctuel ou centre de masse',
    units: 'Forces en Newtons (N), m en kg, accélération en m/s²'
  },
  {
    subjectId: 'physique-chimie',
    category: 'Optique Géométrique',
    title: 'Formule de conjugaison de Descartes',
    formula: '\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f\'} = C',
    conditions: 'Conditions de Gauss (rayons paraxiaux peu inclinés)',
    units: 'Distances en mètres (m), vergence C en dioptries (δ)'
  },

  // SVT
  {
    subjectId: 'svt',
    category: 'Génétique Moléculaire',
    title: 'Complémentarité des bases et transcription',
    formula: 'A \\leftrightarrow U \\quad ; \\quad T \\leftrightarrow A \\quad ; \\quad C \\leftrightarrow G',
    conditions: 'Transcription par l\'ARN polymérase de 3\' vers 5\' sur l\'ADN matrice',
    units: 'Séquence nucléotidique orientée 5\' vers 3\''
  },
  {
    subjectId: 'svt',
    category: 'Géodynamique',
    title: 'Condition d\'instabilité gravitaire de la lithosphère océanique',
    formula: '\\rho_{lithosphère} > \\rho_{asthénosphère} \\approx 3,25 \\text{ g/cm}^3',
    conditions: 'Refroidissement et épaississement de la lithosphère après 30-40 Ma',
    units: 'Densité volumique en g/cm³'
  }
];

export const FormulaSheet: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = MASTER_FORMULAS.filter((entry) => {
    if (selectedSubject !== 'all' && entry.subjectId !== selectedSubject) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        entry.title.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q) ||
        entry.formula.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopyFormula = (f: FormulaEntry, idx: number) => {
    navigator.clipboard.writeText(f.formula);
    setCopiedId(`${f.title}-${idx}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>RÉFÉRENTIEL DU BAC</span>
          <span aria-hidden="true">·</span>
          <span>FORMULAIRE OFFICIEL & FICHES SYNTHÈSE</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Le Formulaire Intégral du Lycéen
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Toutes les relations fondamentales exigibles aux épreuves du Baccalauréat en Maths, Physique-Chimie et SVT, avec conditions de validité et unités légales.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher une formule, un théorème, Newton, Descartes, TVI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-1.5 text-xs">
          {[
            { id: 'all', label: 'Toutes' },
            { id: 'maths', label: 'Maths' },
            { id: 'physique-chimie', label: 'Physique-Chimie' },
            { id: 'svt', label: 'SVT' }
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubject(sub.id as any)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedSubject === sub.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((entry, idx) => {
          const isCopied = copiedId === `${entry.title}-${idx}`;
          const badgeText =
            entry.subjectId === 'maths'
              ? 'Mathématiques'
              : entry.subjectId === 'physique-chimie'
              ? 'Physique-Chimie'
              : 'SVT';

          return (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-600 dark:text-sky-400">{badgeText}</span>
                    <span aria-hidden="true">·</span>
                    <span>{entry.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {entry.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleCopyFormula(entry, idx)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Copier la formule"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Formula display Box */}
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-semibold overflow-x-auto">
                <MathFormula formula={entry.formula} />
              </div>

              {/* Conditions & Units */}
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <div>
                  <strong className="text-slate-700 dark:text-slate-300">Validité : </strong>
                  {entry.conditions}
                </div>
                <div>
                  <strong className="text-slate-700 dark:text-slate-300">Unités : </strong>
                  {entry.units}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
