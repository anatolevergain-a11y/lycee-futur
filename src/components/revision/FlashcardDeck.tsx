import React, { useState } from 'react';
import { Flashcard, SubjectId, UserProgress } from '../../types';
import { FLASHCARD_DECK } from '../../data/flashcards';
import { MathFormula } from '../common/MathFormula';
import { RotateCw, CheckCircle, XCircle, Sparkles, Filter, Brain } from 'lucide-react';

interface FlashcardDeckProps {
  progress: UserProgress;
  onUpdateFlashcardBox: (cardId: string, newBox: number) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({
  progress,
  onUpdateFlashcardBox,
  onGainXp
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [selectedBox, setSelectedBox] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Filter cards
  const filteredCards = FLASHCARD_DECK.filter((card) => {
    if (selectedSubject !== 'all' && card.subjectId !== selectedSubject) return false;
    const cardBox = progress.flashcardBox[card.id] || 1;
    if (selectedBox !== 'all' && cardBox !== selectedBox) return false;
    return true;
  });

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];
  const currentBox = currentCard ? progress.flashcardBox[currentCard.id] || 1 : 1;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1 < filteredCards.length ? prev + 1 : 0));
  };

  const handleKnewIt = () => {
    if (!currentCard) return;
    const nextBox = Math.min(4, currentBox + 1);
    onUpdateFlashcardBox(currentCard.id, nextBox);
    onGainXp(15, `Fiche maîtrisée ➔ Boîte ${nextBox}`);
    handleNext();
  };

  const handleForgotIt = () => {
    if (!currentCard) return;
    onUpdateFlashcardBox(currentCard.id, 1);
    handleNext();
  };

  // Box statistics
  const boxCounts = [1, 2, 3, 4].map((boxNum) => {
    return FLASHCARD_DECK.filter((c) => (progress.flashcardBox[c.id] || 1) === boxNum).length;
  });

  return (
    <div className="space-y-6">
      {/* Header and Leitner explanation */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>OUTIL DE RÉVISION PERSONNALISÉ</span>
          <span aria-hidden="true">·</span>
          <span>SYSTÈME LEITNER (RÉPÉTITION ESPACÉE)</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Fiches Mémo & Formules Clés
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Ancrez durablement les formules, définitions et théorèmes du Bac dans votre mémoire à long terme. Chaque bonne réponse fait monter la fiche d'une boîte.
        </p>
      </div>

      {/* Leitner Box Progression Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { num: 1, label: 'Boîte 1 : À revoir souvent', count: boxCounts[0], color: 'text-rose-500' },
          { num: 2, label: 'Boîte 2 : En cours d\'ancrage', count: boxCounts[1], color: 'text-amber-500' },
          { num: 3, label: 'Boîte 3 : Presque acquis', count: boxCounts[2], color: 'text-sky-500' },
          { num: 4, label: 'Boîte 4 : Maîtrisé pour le Bac', count: boxCounts[3], color: 'text-emerald-500' }
        ].map((box) => (
          <button
            key={box.num}
            onClick={() => {
              setSelectedBox(selectedBox === box.num ? 'all' : box.num);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedBox === box.num
                ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/30'
                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">Boîte {box.num}</span>
              <span className={`text-base font-bold font-mono ${box.color}`}>{box.count}</span>
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-1 truncate">
              {box.label}
            </div>
          </button>
        ))}
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs">
        <span className="text-slate-400 mr-2 flex items-center gap-1 font-medium">
          <Filter className="w-3.5 h-3.5" /> Matière :
        </span>
        {[
          { id: 'all', label: 'Toutes les matières' },
          { id: 'maths', label: 'Mathématiques' },
          { id: 'physique-chimie', label: 'Physique-Chimie' },
          { id: 'svt', label: 'SVT' }
        ].map((sub) => (
          <button
            key={sub.id}
            onClick={() => {
              setSelectedSubject(sub.id as any);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
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

      {/* Main Flashcard Stage */}
      {currentCard ? (
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Fiche <strong className="font-mono text-slate-900 dark:text-white">{currentIndex + 1}</strong> sur{' '}
              <strong className="font-mono">{filteredCards.length}</strong>
            </span>
            <span className="font-mono text-sky-600 dark:text-sky-400 font-semibold">
              Boîte {currentBox} / 4
            </span>
          </div>

          {/* Flippable Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-md transition-all select-none relative group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <span className="uppercase font-semibold tracking-wider text-sky-600 dark:text-sky-400">
                  {currentCard.chapterTitle}
                </span>
                <span className="flex items-center gap-1 group-hover:text-sky-500 transition-colors">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Cliquer pour retourner</span>
                </span>
              </div>

              {!isFlipped ? (
                /* Question Front */
                <div className="py-6">
                  <div className="text-xs uppercase text-slate-400 font-bold mb-2">Question :</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>
              ) : (
                /* Answer Back */
                <div className="py-4 space-y-3">
                  <div className="text-xs uppercase text-emerald-500 font-bold">Réponse officielle :</div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {currentCard.answer}
                  </p>

                  {currentCard.formula && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-semibold">
                      <MathFormula formula={currentCard.formula} />
                    </div>
                  )}

                  {currentCard.mnemonic && (
                    <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg text-xs text-amber-900 dark:text-amber-300">
                      <strong>Moyen mnémotechnique : </strong> {currentCard.mnemonic}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="text-[11px] text-center text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              {isFlipped ? 'Évaluez votre souvenir ci-dessous' : 'Testez votre mémoire avant de retourner la fiche'}
            </div>
          </div>

          {/* Assessment Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleForgotIt}
              className="py-3 px-4 border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-800 dark:text-rose-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>À revoir (Retour Boîte 1)</span>
            </button>

            <button
              onClick={handleKnewIt}
              className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Je la savais (+15 XP ➔ Boîte {Math.min(4, currentBox + 1)})</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
          <Brain className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Aucune fiche dans ce filtre
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Sélectionnez une autre boîte ou une autre matière pour continuer vos révisions.
          </p>
        </div>
      )}
    </div>
  );
};
