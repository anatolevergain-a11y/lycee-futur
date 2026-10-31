import React, { useState } from 'react';
import { Play, RotateCcw, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface DnaTranslationSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

// Genetic Code Dictionary (Codon -> Amino Acid 3-letter code + full name)
const GENETIC_CODE: Record<string, { code: string; name: string; color: string }> = {
  AUG: { code: 'Met', name: 'Méthionine (Initiation)', color: 'bg-emerald-500' },
  UUU: { code: 'Phe', name: 'Phénylalanine', color: 'bg-sky-500' },
  UUC: { code: 'Phe', name: 'Phénylalanine', color: 'bg-sky-500' },
  UUA: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  UUG: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  CUU: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  CUC: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  CUA: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  CUG: { code: 'Leu', name: 'Leucine', color: 'bg-indigo-500' },
  AUU: { code: 'Ile', name: 'Isoleucine', color: 'bg-teal-500' },
  AUC: { code: 'Ile', name: 'Isoleucine', color: 'bg-teal-500' },
  AUA: { code: 'Ile', name: 'Isoleucine', color: 'bg-teal-500' },
  GUU: { code: 'Val', name: 'Valine', color: 'bg-amber-500' },
  GUC: { code: 'Val', name: 'Valine', color: 'bg-amber-500' },
  GUA: { code: 'Val', name: 'Valine', color: 'bg-amber-500' },
  GUG: { code: 'Val', name: 'Valine', color: 'bg-amber-500' },
  UCU: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  UCC: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  UCA: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  UCG: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  CCU: { code: 'Pro', name: 'Proline', color: 'bg-purple-500' },
  CCC: { code: 'Pro', name: 'Proline', color: 'bg-purple-500' },
  CCA: { code: 'Pro', name: 'Proline', color: 'bg-purple-500' },
  CCG: { code: 'Pro', name: 'Proline', color: 'bg-purple-500' },
  ACU: { code: 'Thr', name: 'Thréonine', color: 'bg-orange-500' },
  ACC: { code: 'Thr', name: 'Thréonine', color: 'bg-orange-500' },
  ACA: { code: 'Thr', name: 'Thréonine', color: 'bg-orange-500' },
  ACG: { code: 'Thr', name: 'Thréonine', color: 'bg-orange-500' },
  GCU: { code: 'Ala', name: 'Alanine', color: 'bg-blue-500' },
  GCC: { code: 'Ala', name: 'Alanine', color: 'bg-blue-500' },
  GCA: { code: 'Ala', name: 'Alanine', color: 'bg-blue-500' },
  GCG: { code: 'Ala', name: 'Alanine', color: 'bg-blue-500' },
  UAU: { code: 'Tyr', name: 'Tyrosine', color: 'bg-pink-500' },
  UAC: { code: 'Tyr', name: 'Tyrosine', color: 'bg-pink-500' },
  CAU: { code: 'His', name: 'Histidine', color: 'bg-violet-500' },
  CAC: { code: 'His', name: 'Histidine', color: 'bg-violet-500' },
  CAA: { code: 'Gln', name: 'Glutamine', color: 'bg-lime-600' },
  CAG: { code: 'Gln', name: 'Glutamine', color: 'bg-lime-600' },
  AAU: { code: 'Asn', name: 'Asparagine', color: 'bg-emerald-600' },
  AAC: { code: 'Asn', name: 'Asparagine', color: 'bg-emerald-600' },
  AAA: { code: 'Lys', name: 'Lysine', color: 'bg-rose-500' },
  AAG: { code: 'Lys', name: 'Lysine', color: 'bg-rose-500' },
  GAU: { code: 'Asp', name: 'Acide aspartique', color: 'bg-red-500' },
  GAC: { code: 'Asp', name: 'Acide aspartique', color: 'bg-red-500' },
  GAA: { code: 'Glu', name: 'Acide glutamique', color: 'bg-red-600' },
  GAG: { code: 'Glu', name: 'Acide glutamique', color: 'bg-red-600' },
  UGU: { code: 'Cys', name: 'Cystéine', color: 'bg-yellow-500' },
  UGC: { code: 'Cys', name: 'Cystéine', color: 'bg-yellow-500' },
  UGG: { code: 'Trp', name: 'Tryptophane', color: 'bg-amber-600' },
  CGU: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  CGC: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  CGA: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  CGG: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  AGU: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  AGC: { code: 'Ser', name: 'Sérine', color: 'bg-cyan-500' },
  AGA: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  AGG: { code: 'Arg', name: 'Arginine', color: 'bg-fuchsia-500' },
  GGU: { code: 'Gly', name: 'Glycine', color: 'bg-slate-500' },
  GGC: { code: 'Gly', name: 'Glycine', color: 'bg-slate-500' },
  GGA: { code: 'Gly', name: 'Glycine', color: 'bg-slate-500' },
  GGG: { code: 'Gly', name: 'Glycine', color: 'bg-slate-500' },
  UAA: { code: 'STOP', name: 'Codon STOP (Terminaison)', color: 'bg-rose-700' },
  UAG: { code: 'STOP', name: 'Codon STOP (Terminaison)', color: 'bg-rose-700' },
  UGA: { code: 'STOP', name: 'Codon STOP (Terminaison)', color: 'bg-rose-700' }
};

// Default Coding DNA Strand (5' -> 3')
const DEFAULT_DNA = 'ATGGCCCTGGAGGTTTAA';

export const DnaTranslationSim: React.FC<DnaTranslationSimProps> = ({ onGainXp }) => {
  const [dnaStrand, setDnaStrand] = useState<string>(DEFAULT_DNA);
  const [selectedCodonIndex, setSelectedCodonIndex] = useState<number>(0);
  const [stepStage, setStepStage] = useState<'dna' | 'transcription' | 'translation'>('translation');
  const [mutationTypeNotice, setMutationTypeNotice] = useState<string | null>(null);

  // Transcribe Coding Strand (5'->3') to mRNA (5'->3') : T replaces U
  const mrnaStrand = dnaStrand.replace(/T/g, 'U');

  // Split mRNA into codons (triplets)
  const codons: string[] = [];
  for (let i = 0; i < mrnaStrand.length; i += 3) {
    if (i + 3 <= mrnaStrand.length) {
      codons.push(mrnaStrand.slice(i, i + 3));
    }
  }

  // Translate codons to amino acids
  const aminoAcids = codons.map((codon) => {
    return GENETIC_CODE[codon] || { code: '???', name: 'Inconnu', color: 'bg-slate-600' };
  });

  // Check if stopped prematurely
  const stopIndex = aminoAcids.findIndex((aa) => aa.code === 'STOP');
  const activePeptide = stopIndex === -1 ? aminoAcids : aminoAcids.slice(0, stopIndex);

  // Preset mutations tester
  const applyPresetMutation = (type: 'silent' | 'missense' | 'nonsense') => {
    if (type === 'silent') {
      // Mutate codon 2 (GCC -> GCU, both code for Alanine)
      const mut = 'ATGGCACTGGAGGTTTAA';
      setDnaStrand(mut);
      setMutationTypeNotice('Mutation Silencieuse : Le codon GCC devient GCA mais code toujours pour l\'Alanine (dégénérescence du code). Aucun impact sur la protéine !');
      onGainXp?.(30, 'Analyse d\'une mutation silencieuse');
    } else if (type === 'missense') {
      // Mutate codon 4 (GAG -> GTG, Acide Glutamique -> Valine, comme dans la drépanocytose)
      const mut = 'ATGGCCCTGGTGGTTTAA';
      setDnaStrand(mut);
      setMutationTypeNotice('Mutation Faux-Sens : Le codon GAG devient GTG (GUG sur l\'ARNm). L\'acide glutamique est remplacé par une valine, modifiant la structure tridimensionnelle !');
      onGainXp?.(40, 'Analyse d\'une mutation faux-sens (type drépanocytose)');
    } else if (type === 'nonsense') {
      // Mutate codon 3 (CTG -> TAG, STOP prématuré)
      const mut = 'ATGGCTAGAGAGGTTTAA';
      setDnaStrand(mut);
      setMutationTypeNotice('Mutation Non-Sens : Le 3ème codon devient TAG (UAG sur l\'ARNm). C\'est un codon STOP prématuré : la chaîne peptidique est tronquée et non fonctionnelle !');
      onGainXp?.(40, 'Analyse d\'une mutation non-sens');
    }
  };

  const resetDna = () => {
    setDnaStrand(DEFAULT_DNA);
    setMutationTypeNotice(null);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Simulation Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>SVT TERMINALE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>SIMULATEUR DE TRADUCTION & MUTATIONS</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Du Gène à la Protéine : Transcription, Traduction et Code Génétique
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => applyPresetMutation('silent')}
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            Test Mutation Silencieuse
          </button>
          <button
            onClick={() => applyPresetMutation('missense')}
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300"
          >
            Test Faux-Sens (Drépanocytose)
          </button>
          <button
            onClick={() => applyPresetMutation('nonsense')}
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300"
          >
            Test Non-Sens (STOP)
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 space-y-6">
        {/* Notice of mutation */}
        {mutationTypeNotice && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
              {mutationTypeNotice}
            </div>
          </div>
        )}

        {/* Step 1: Brin d'ADN codant (5' -> 3') */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <span>1. Brin d'ADN Codant (5' → 3')</span>
              <span className="text-slate-400 font-normal">Noyau cellulaire</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Longueur : {dnaStrand.length} nucléotides
            </span>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
            {codons.map((codon, cIdx) => (
              <div
                key={cIdx}
                className={`flex gap-1 p-1.5 rounded-lg border transition-all ${
                  selectedCodonIndex === cIdx
                    ? 'border-sky-500 bg-sky-500/10 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'
                }`}
                onClick={() => setSelectedCodonIndex(cIdx)}
              >
                {codon.replace(/U/g, 'T').split('').map((nt, nIdx) => (
                  <span
                    key={nIdx}
                    className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold ${
                      nt === 'A'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : nt === 'T'
                        ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        : nt === 'C'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                    }`}
                  >
                    {nt}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: ARN messager transcrit (5' -> 3') */}
        <div className="p-4 bg-sky-50/60 dark:bg-sky-950/30 rounded-xl border border-sky-100 dark:border-sky-900/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-sky-700 dark:text-sky-300 uppercase tracking-wider flex items-center gap-2">
              <span>2. ARN messager synthétisé (5' → 3')</span>
              <span className="text-slate-400 font-normal">Après épissage, export vers le cytoplasme</span>
            </span>
            <span className="text-[11px] text-sky-600 dark:text-sky-400 font-mono">
              Uracile (U) remplace la Thymine (T)
            </span>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
            {codons.map((codon, cIdx) => (
              <div
                key={cIdx}
                className={`flex gap-1 p-1.5 rounded-lg border transition-all ${
                  selectedCodonIndex === cIdx
                    ? 'border-sky-500 bg-sky-500/20'
                    : 'border-sky-200 dark:border-sky-800 bg-white/80 dark:bg-slate-900/80'
                }`}
                onClick={() => setSelectedCodonIndex(cIdx)}
              >
                {codon.split('').map((nt, nIdx) => (
                  <span
                    key={nIdx}
                    className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold ${
                      nt === 'A'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : nt === 'U'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                        : nt === 'C'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                    }`}
                  >
                    {nt}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Chaîne Polypeptidique (Traduction par le Ribosome) */}
        <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span>3. Chaîne Polypeptidique (Protéine synthétisée)</span>
              <span className="text-slate-400 font-normal">Lecture codon par codon par le ribosome</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-mono">
              {activePeptide.length} résidus d'acides aminés
            </span>
          </div>

          {/* Polypeptide beads in sequence */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1">N-term ➔</span>
            {aminoAcids.map((aa, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`px-3 py-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center shadow-md transition-all ${
                    idx >= (stopIndex === -1 ? 999 : stopIndex)
                      ? 'bg-slate-800 text-slate-500 line-through opacity-60'
                      : `${aa.color} text-white`
                  }`}
                  title={`${aa.name} (Codon: ${codons[idx]})`}
                >
                  <span className="font-mono text-xs">{aa.code}</span>
                  <span className="text-[9px] font-normal opacity-90">{codons[idx]}</span>
                </div>
                {idx < aminoAcids.length - 1 && (
                  <span className="text-slate-600 font-mono text-xs">—</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-xs font-mono text-slate-400 ml-1">➔ C-term</span>
          </div>

          {/* Details of selected codon */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-300">
            <div>
              Codon sélectionné :{' '}
              <strong className="text-sky-400 font-mono text-sm">{codons[selectedCodonIndex]}</strong>
              {' ➔ '}
              <strong className="text-emerald-400">
                {GENETIC_CODE[codons[selectedCodonIndex]]?.name ?? 'Non défini'}
              </strong>
            </div>
            <button
              onClick={resetDna}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Rétablir séquence originelle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
