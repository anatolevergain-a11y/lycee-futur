/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GradeLevel,
  SubjectId,
  Chapter,
  UserProgress
} from './types';
import { CURRICULUM_CHAPTERS } from './data/curriculum';
import { ChapterView } from './components/ChapterView';
import { SimulationHub } from './components/simulations/SimulationHub';
import { BacToolsHub } from './components/revision/BacToolsHub';
import { FlashcardDeck } from './components/revision/FlashcardDeck';
import { BacSimulator } from './components/revision/BacSimulator';
import { FormulaSheet } from './components/revision/FormulaSheet';
import { DiagnosticQuiz } from './components/revision/DiagnosticQuiz';
import { PomodoroTimer } from './components/revision/PomodoroTimer';
import { StudentProfile } from './components/StudentProfile';

import {
  BookOpen,
  FlaskConical,
  FileCheck2,
  Brain,
  User,
  Sun,
  Moon,
  Zap,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Search,
  Gamepad2,
  Rocket,
  Smartphone,
  Trophy,
  Film,
  Leaf,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  X,
  LayoutGrid,
  List,
  Scale
} from 'lucide-react';

type SectionId = 'curriculum' | 'simulations' | 'exercises' | 'revision' | 'profile' | 'legal';

const SECTION_PATHS: Record<SectionId, string> = {
  curriculum: '/',
  simulations: '/simulateurs',
  exercises: '/exercices',
  revision: '/outils-bac',
  profile: '/profil',
  legal: '/mentions-legales'
};

function getInitialRouteState(): {
  section: SectionId;
  chapterId: string | null;
  grade: GradeLevel;
} {
  if (typeof window === 'undefined') {
    return { section: 'curriculum', chapterId: null, grade: 'terminale' };
  }
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path.startsWith('/chapitre/')) {
    const slug = decodeURIComponent(path.replace('/chapitre/', ''));
    const found = CURRICULUM_CHAPTERS.find((c) => c.id === slug);
    if (found) {
      return { section: 'curriculum', chapterId: found.id, grade: found.gradeLevel };
    }
  }
  if (path === '/simulateurs') return { section: 'simulations', chapterId: null, grade: 'terminale' };
  if (path === '/exercices') return { section: 'exercises', chapterId: null, grade: 'terminale' };
  if (path === '/outils-bac') return { section: 'revision', chapterId: null, grade: 'terminale' };
  if (path === '/profil') return { section: 'profile', chapterId: null, grade: 'terminale' };
  if (path === '/mentions-legales') return { section: 'legal', chapterId: null, grade: 'terminale' };
  return { section: 'curriculum', chapterId: null, grade: 'terminale' };
}

const INITIAL_PROGRESS: UserProgress = {
  xp: 120,
  level: 1,
  streakDays: 4,
  lastStudyDate: new Date().toISOString().split('T')[0],
  completedChapters: {
    'math-term-deriv-tvi': {
      courseRead: true,
      exercisesCompleted: ['ex-math-tvi-1'],
      quizScore: 100,
      bestQuizScore: 100
    }
  },
  unlockedBadgeIds: ['b-welcome'],
  flashcardBox: {
    'fc-m1': 3,
    'fc-pc1': 2,
    'fc-svt1': 4
  },
  bacSimulatorNotes: {}
};

export default function App() {
  const initialRoute = getInitialRouteState();

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('lycee_futur_theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Top Nav Active Section
  const [currentSection, setCurrentSection] = useState<SectionId>(initialRoute.section);

  // Active Subject Filter in Curriculum
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');

  // Active Grade Level (2nde, 1ère, Terminale)
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(initialRoute.grade);

  // Currently opened Chapter in full interactive view
  const [openedChapterId, setOpenedChapterId] = useState<string | null>(initialRoute.chapterId);

  // Currently active simulation in Lab view
  const [activeSimulationId, setActiveSimulationId] = useState<string>('titration');

  // Active revision tool tab
  const [activeRevisionTab, setActiveRevisionTab] = useState<
    'tools_hub' | 'flashcards' | 'pomodoro' | 'bac' | 'formulas' | 'diagnostic'
  >('tools_hub');

  // Search query for curriculum
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Compact uncluttered view for curriculum
  const [isCompactView, setIsCompactView] = useState<boolean>(true);

  // Active theme filter for exercises tab
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  // Exercise accordion state in exercises tab
  const [revealedExHints, setRevealedExHints] = useState<Record<string, number>>({});
  const [revealedExSolutions, setRevealedExSolutions] = useState<Record<string, boolean>>({});

  // User persistent progress
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('lycee_futur_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing progress', e);
      }
    }
    return INITIAL_PROGRESS;
  });

  // Notification toast for XP gains
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);

  // Navigation helpers with URL History API sync
  const navigateSection = (section: SectionId) => {
    setCurrentSection(section);
    setOpenedChapterId(null);
    const targetPath = SECTION_PATHS[section];
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  const openChapter = (chapterId: string) => {
    setOpenedChapterId(chapterId);
    const targetPath = `/chapitre/${encodeURIComponent(chapterId)}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeChapter = () => {
    setOpenedChapterId(null);
    const targetPath = SECTION_PATHS[currentSection];
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  // Handle browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRouteState();
      setCurrentSection(route.section);
      setOpenedChapterId(route.chapterId);
      if (route.chapterId) {
        setSelectedGrade(route.grade);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync theme with DOM
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lycee_futur_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lycee_futur_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync progress to LocalStorage
  useEffect(() => {
    localStorage.setItem('lycee_futur_progress', JSON.stringify(progress));
  }, [progress]);

  const openedChapter = CURRICULUM_CHAPTERS.find((c) => c.id === openedChapterId);

  // Dynamic SEO Metadata & JSON-LD Structured Data per page/chapter
  useEffect(() => {
    const baseUrl = 'https://lyceefutur.com';
    let title = 'Lycée Futur | Cours, Exercices Corrigés & Simulations (Seconde, Première, Terminale)';
    let description =
      'Plateforme gratuite d’excellence pour le lycée : cours complets des programmes officiels de Maths, Physique-Chimie et SVT, simulations visuelles de laboratoire et exercices corrigés du Bac.';
    let canonicalUrl = `${baseUrl}${SECTION_PATHS[currentSection]}`;

    if (openedChapter) {
      const subjectLabel =
        openedChapter.subjectId === 'maths'
          ? 'Mathématiques'
          : openedChapter.subjectId === 'physique-chimie'
          ? 'Physique-Chimie'
          : 'SVT';
      const gradeLabel =
        openedChapter.gradeLevel === 'terminale'
          ? 'Terminale'
          : openedChapter.gradeLevel === '1ere'
          ? 'Première'
          : 'Seconde';

      title = `${openedChapter.title} - Cours & Exercices Corrigés (${gradeLabel} ${subjectLabel}) | Lycée Futur`;
      description =
        openedChapter.description ||
        `Révisez le chapitre ${openedChapter.title} en ${gradeLabel} (${subjectLabel}) : fiche de cours complète, formules clés et exercices corrigés du Bac.`;
      canonicalUrl = `${baseUrl}/chapitre/${encodeURIComponent(openedChapter.id)}`;
    } else if (currentSection === 'simulations') {
      title = 'Simulateurs Scientifiques Interactifs (Maths, Physique-Chimie, SVT) | Lycée Futur';
      description =
        'Expérimentez en direct avec 22 simulateurs interactifs de laboratoire pour le lycée : titrage acide-base, mécanique, optique, fonctions et probabilités.';
    } else if (currentSection === 'exercises') {
      title = '372 Exercices Corrigés Type Bac & Thèmes Passionnants | Lycée Futur';
      description =
        'Entraînez-vous sur 372 exercices corrigés pas à pas avec indices et pièges du Bac en Maths, Physique-Chimie et SVT.';
    } else if (currentSection === 'revision') {
      title = 'Outils de Révision Bac, Simulateur de Notes & Flashcards | Lycée Futur';
      description =
        'Préparez le Baccalauréat avec 51 outils de révision : simulateur de moyenne Bac coef 100, fiches flash, minuteur Pomodoro et formulaires.';
    } else if (currentSection === 'legal') {
      title = 'Mentions Légales & Politique de Confidentialité | Lycée Futur';
      description =
        'Mentions légales, informations sur l’éditeur, l’hébergement, la propriété intellectuelle et la gestion des données personnelles de la plateforme Lycée Futur.';
    }

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr.split('=');
        el.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name="description"', description);
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:url"]', 'property="og:url"', canonicalUrl);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // Dynamic Course Schema.org JSON-LD when viewing a chapter
    const existingJsonLd = document.getElementById('dynamic-course-jsonld');
    if (openedChapter) {
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: openedChapter.title,
        description,
        url: canonicalUrl,
        educationalLevel: openedChapter.gradeLevel,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Lycée Futur',
          sameAs: baseUrl
        }
      };
      if (existingJsonLd) {
        existingJsonLd.textContent = JSON.stringify(schemaData);
      } else {
        const script = document.createElement('script');
        script.id = 'dynamic-course-jsonld';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }
  }, [openedChapter, currentSection]);

  // Gain XP handler
  const handleGainXp = (amount: number, reason: string) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount
    }));
    setXpToast({ amount, reason });
    setTimeout(() => {
      setXpToast(null);
    }, 3500);
  };

  // Update chapter progress
  const handleUpdateChapterProgress = (
    chapterId: string,
    updates: { courseRead?: boolean; exerciseCompletedId?: string; quizScore?: number }
  ) => {
    setProgress((prev) => {
      const existing = prev.completedChapters[chapterId] || {
        courseRead: false,
        exercisesCompleted: []
      };

      const updatedExercises = updates.exerciseCompletedId
        ? Array.from(new Set([...existing.exercisesCompleted, updates.exerciseCompletedId]))
        : existing.exercisesCompleted;

      return {
        ...prev,
        completedChapters: {
          ...prev.completedChapters,
          [chapterId]: {
            courseRead: updates.courseRead !== undefined ? updates.courseRead : existing.courseRead,
            exercisesCompleted: updatedExercises,
            quizScore: updates.quizScore !== undefined ? updates.quizScore : existing.quizScore,
            bestQuizScore:
              updates.quizScore !== undefined
                ? Math.max(existing.bestQuizScore ?? 0, updates.quizScore)
                : existing.bestQuizScore
          }
        }
      };
    });
  };

  // Update flashcard box
  const handleUpdateFlashcardBox = (cardId: string, newBox: number) => {
    setProgress((prev) => ({
      ...prev,
      flashcardBox: {
        ...prev.flashcardBox,
        [cardId]: newBox
      }
    }));
  };

  // Save Bac simulation notes
  const handleSaveBacNotes = (notes: Record<string, number>) => {
    setProgress((prev) => ({
      ...prev,
      bacSimulatorNotes: notes
    }));
  };

  // Save diagnostic plan
  const handleSavePlan = (plan: { weakChapters: string[]; suggestedFocus: string; generatedAt: string }) => {
    setProgress((prev) => ({
      ...prev,
      personalizedPlan: plan
    }));
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser toutes vos statistiques ?')) {
      setProgress(INITIAL_PROGRESS);
    }
  };

  // Filtered chapters for current selection with instant search
  const filteredChapters = CURRICULUM_CHAPTERS.filter((chap) => {
    if (selectedSubject !== 'all' && chap.subjectId !== selectedSubject) return false;
    if (chap.gradeLevel !== selectedGrade) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = chap.title.toLowerCase().includes(q);
      const matchCode = chap.officialCode.toLowerCase().includes(q);
      const matchDesc = chap.description.toLowerCase().includes(q);
      const matchFormulas = chap.keyFormulas.some((f) =>
        f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
      );
      const matchExercise = chap.exercises.some(
        (ex) =>
          ex.title.toLowerCase().includes(q) ||
          ex.context.toLowerCase().includes(q) ||
          (ex.themeLabel && ex.themeLabel.toLowerCase().includes(q))
      );
      return matchTitle || matchCode || matchDesc || matchFormulas || matchExercise;
    }
    return true;
  });

  // Extract all exercises with their parent chapter info for the themed bank
  const allThemedExercises = CURRICULUM_CHAPTERS.flatMap((chap) =>
    chap.exercises.map((ex) => ({
      ...ex,
      chapterId: chap.id,
      chapterTitle: chap.title,
      subjectId: chap.subjectId,
      gradeLevel: chap.gradeLevel,
      officialCode: chap.officialCode
    }))
  );

  const filteredThemedExercises = allThemedExercises.filter((ex) => {
    if (selectedGrade !== ex.gradeLevel) return false;
    if (selectedSubject !== 'all' && ex.subjectId !== selectedSubject) return false;
    if (selectedTheme !== 'all' && ex.themeTag !== selectedTheme) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* XP Toast Notification */}
      {xpToast && (
        <div className="fixed top-18 right-6 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 dark:border-slate-300 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-top duration-200">
          <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>
            +{xpToast.amount} XP : {xpToast.reason}
          </span>
        </div>
      )}

      {/* TOP BAR */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => navigateSection('curriculum')}
            className="text-lg sm:text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
          >
            <span>Lycée Futur</span>
          </button>

          {/* Zone 2: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => navigateSection('curriculum')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentSection === 'curriculum'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Cours & Programmes</span>
            </button>
            <button
              onClick={() => navigateSection('simulations')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentSection === 'simulations'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Simulateurs Labo</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold">22</span>
            </button>
            <button
              onClick={() => navigateSection('exercises')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentSection === 'exercises'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Exercices Corrigés</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-bold">372</span>
            </button>
            <button
              onClick={() => navigateSection('revision')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentSection === 'revision'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>Outils & Bac</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">51</span>
            </button>
            <button
              onClick={() => navigateSection('profile')}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentSection === 'profile'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              <User className="w-4 h-4" />
              <span>Mon Profil ({progress.xp} XP)</span>
            </button>
          </nav>

          {/* Zone 3: Grade Selector & Theme switch */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value as GradeLevel)}
              className="text-xs font-semibold py-1.5 px-2 sm:px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="terminale">Terminale Spé</option>
              <option value="1ere">Première Spé</option>
              <option value="2nde">Seconde Générale</option>
            </select>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Changer de thème"
              title={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Header Quick Bar */}
        <div className="md:hidden overflow-x-auto scrollbar-none flex items-center gap-2 px-3 py-2 bg-slate-100/90 dark:bg-slate-800/90 border-t border-slate-200/80 dark:border-slate-700/80">
          {[
            { id: 'curriculum', label: 'Cours', badge: null, icon: BookOpen },
            { id: 'simulations', label: 'Labo', badge: '22', icon: FlaskConical },
            { id: 'exercises', label: 'Exercices', badge: '372', icon: FileCheck2 },
            { id: 'revision', label: 'Outils Bac', badge: '51', icon: Brain, isPrimary: true },
            { id: 'profile', label: 'Profil', badge: `${progress.xp} XP`, icon: User },
          ].map((item) => {
            const isActive = currentSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigateSection(item.id as SectionId)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all shadow-2xs ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : item.isPrimary
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 pb-28 md:pb-12">
        {openedChapter ? (
          <ChapterView
            chapter={openedChapter}
            progress={progress}
            onBack={closeChapter}
            onOpenSimulation={(simId) => {
              setActiveSimulationId(simId);
              navigateSection('simulations');
            }}
            onUpdateChapterProgress={handleUpdateChapterProgress}
            onGainXp={handleGainXp}
          />
        ) : (
          <>
            {/* SECTION: CURRICULUM */}
            {currentSection === 'curriculum' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>PROGRAMMES OFFICIELS BOEN 2026</span>
                        <span aria-hidden="true">·</span>
                        <span>{filteredChapters.length} CHAPITRES DISPONIBLES</span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                        Cours & Programmes
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Consultez les leçons avec formules KaTeX, entraînez-vous sur les exercices guidés et testez vos acquis avec les quiz.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                        <button
                          onClick={() => setIsCompactView(true)}
                          className={`px-3 py-1.5 font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                            isCompactView
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                          title="Affichage allégé et direct"
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Vue Aérée</span>
                        </button>
                        <button
                          onClick={() => setIsCompactView(false)}
                          className={`px-3 py-1.5 font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                            !isCompactView
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                          title="Afficher les résumés détaillés et points clés"
                        >
                          <List className="w-3.5 h-3.5" />
                          <span>Vue Complète</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filters Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher un chapitre, mot-clé, formule..."
                        className="w-full pl-10 pr-9 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 self-start lg:self-auto">
                      {[
                        { id: 'terminale', label: 'Terminale' },
                        { id: '1ere', label: 'Première' },
                        { id: '2nde', label: 'Seconde' }
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => setSelectedGrade(lvl.id as GradeLevel)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            selectedGrade === lvl.id
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject Filter Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {[
                      {
                        id: 'all',
                        label: 'Toutes les matières',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade).length
                      },
                      {
                        id: 'maths',
                        label: 'Mathématiques',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'maths').length
                      },
                      {
                        id: 'physique-chimie',
                        label: 'Physique-Chimie',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'physique-chimie').length
                      },
                      {
                        id: 'svt',
                        label: 'SVT',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'svt').length
                      }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id as SubjectId | 'all')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                          selectedSubject === sub.id
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800'
                        }`}
                      >
                        <span>{sub.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          selectedSubject === sub.id
                            ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900'
                            : 'bg-slate-200/80 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                        }`}>
                          {sub.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter Cards Grid */}
                {filteredChapters.length === 0 ? (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <Search className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Aucun chapitre ne correspond à votre recherche "{searchQuery}"
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedSubject('all');
                      }}
                      className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 transition-colors"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredChapters.map((chap) => {
                      const st = progress.completedChapters[chap.id];
                      const isDone = st && (st.courseRead || (st.quizScore ?? 0) >= 60);

                      const subjectBadge =
                        chap.subjectId === 'maths'
                          ? { label: 'Maths', color: 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60' }
                          : chap.subjectId === 'physique-chimie'
                          ? { label: 'Physique-Chimie', color: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60' }
                          : { label: 'SVT', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' };

                      const themedEx = chap.exercises.find((ex) => ex.themeLabel);

                      return (
                        <div
                          key={chap.id}
                          className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <span className={`font-semibold px-2 py-0.5 rounded-md border text-[11px] ${subjectBadge.color}`}>
                                  {subjectBadge.label}
                                </span>
                                <span className="font-mono text-slate-400 dark:text-slate-500 text-[11px]">
                                  {chap.officialCode}
                                </span>
                              </div>
                              {isDone && (
                                <span className="text-emerald-500 flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                                  <CheckCircle className="w-3 h-3" /> Validé
                                </span>
                              )}
                            </div>

                            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                              <a
                                href={`/chapitre/${encodeURIComponent(chap.id)}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  openChapter(chap.id);
                                }}
                              >
                                {chap.title}
                              </a>
                            </h3>

                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              {chap.simulationId && (
                                <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50 flex items-center gap-1">
                                  <FlaskConical className="w-3 h-3" /> Labo Interactif
                                </span>
                              )}
                              {themedEx && (
                                <span className="text-[11px] font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 px-2 py-0.5 rounded border border-violet-200 dark:border-violet-900/50">
                                  {themedEx.themeLabel}
                                </span>
                              )}
                            </div>

                            {!isCompactView && (
                              <div className="pt-2 space-y-3">
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {chap.description}
                                </p>
                                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                                  {chap.summaryHighlights.slice(0, 2).map((hi, i) => (
                                    <div key={i} className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 line-clamp-1">
                                      <span className="text-sky-500 font-bold">•</span>
                                      <span>{hi}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{chap.estimatedMinutes} min</span>
                              <span aria-hidden="true">·</span>
                              <span>{chap.exercises.length} ex. Bac</span>
                            </div>

                            <a
                              href={`/chapitre/${encodeURIComponent(chap.id)}`}
                              onClick={(e) => {
                                e.preventDefault();
                                openChapter(chap.id);
                              }}
                              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                            >
                              <span>Étudier</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* SECTION: SIMULATEURS LABO */}
            {currentSection === 'simulations' && (
              <SimulationHub onGainXp={handleGainXp} activeSimId={activeSimulationId} />
            )}

            {/* SECTION: EXERCICES CORRIGÉS À THÈMES */}
            {currentSection === 'exercises' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BANQUE DE PROBLÈMES TYPES BAC & SUJETS ANCRÉS DANS LE RÉEL</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Exercices à Thèmes Passionnants
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                    Révisez les mathématiques, la physique-chimie et la SVT à travers les univers qui vous motivent : jeux vidéo, Formule 1, conquête spatiale, streaming, enquêtes policières et transition écologique.
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">
                      Choisir une thématique :
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { id: 'all', label: 'Toutes les thématiques', icon: Sparkles },
                        { id: 'gaming', label: '🎮 Gaming & Esport', icon: Gamepad2 },
                        { id: 'space', label: '🚀 Conquête Spatiale', icon: Rocket },
                        { id: 'tech', label: '📱 Tech & Réseaux', icon: Smartphone },
                        { id: 'sport', label: '🏎️ Sport & Performance', icon: Trophy },
                        { id: 'cinema', label: '🎬 Séries & Enquêtes', icon: Film },
                        { id: 'science', label: '🧬 Santé & Biotechnologies', icon: Sparkles },
                        { id: 'ecologie', label: '🌱 Écologie & Climat', icon: Leaf }
                      ].map((th) => (
                        <button
                          key={th.id}
                          onClick={() => setSelectedTheme(th.id)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all flex items-center gap-1.5 ${
                            selectedTheme === th.id
                              ? 'bg-violet-600 text-white shadow-sm font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          <span>{th.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      {[
                        { id: 'terminale', label: 'Terminale' },
                        { id: '1ere', label: 'Première' },
                        { id: '2nde', label: 'Seconde' }
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => setSelectedGrade(lvl.id as GradeLevel)}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                            selectedGrade === lvl.id
                              ? 'bg-white dark:bg-slate-900 text-violet-600 dark:text-violet-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      {[
                        { id: 'all', label: 'Toutes' },
                        { id: 'maths', label: 'Maths' },
                        { id: 'physique-chimie', label: 'Physique-Chimie' },
                        { id: 'svt', label: 'SVT' }
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedSubject(sub.id as SubjectId | 'all')}
                          className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                            selectedSubject === sub.id
                              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/70 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-violet-500" />
                        <span>{filteredThemedExercises.length} exercices corrigés</span>
                      </span>
                    </div>
                  </div>
                </div>

                {filteredThemedExercises.length === 0 ? (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Aucun exercice trouvé pour ce filtre thématique en {selectedGrade.toUpperCase()}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedTheme('all');
                        setSelectedSubject('all');
                      }}
                      className="px-4 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                    >
                      Afficher tous les exercices
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredThemedExercises.map((exercise) => {
                      const subjectBadge =
                        exercise.subjectId === 'maths'
                          ? { label: 'Maths', color: 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60' }
                          : exercise.subjectId === 'physique-chimie'
                          ? { label: 'Physique-Chimie', color: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60' }
                          : { label: 'SVT', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' };

                      return (
                        <div
                          key={exercise.id}
                          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
                        >
                          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              {exercise.themeLabel ? (
                                <span className="font-semibold text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950/70 px-2.5 py-0.5 rounded-md border border-violet-200 dark:border-violet-800 text-xs flex items-center gap-1.5">
                                  {exercise.themeLabel}
                                </span>
                              ) : (
                                <span className="font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md text-xs">
                                  Type Bac
                                </span>
                              )}
                              <span className={`font-semibold px-2 py-0.5 rounded-md border text-xs ${subjectBadge.color}`}>
                                {subjectBadge.label}
                              </span>
                              <span className="text-xs font-mono text-slate-400">
                                {exercise.officialCode}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-xs font-semibold text-slate-500">
                                Barème : {exercise.points} points
                              </span>
                              <a
                                href={`/chapitre/${encodeURIComponent(exercise.chapterId)}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  openChapter(exercise.chapterId);
                                }}
                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                              >
                                <span>Voir le cours</span>
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>

                          <div className="p-5 space-y-3">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                              {exercise.title}
                            </h3>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                              {exercise.context}
                            </div>
                          </div>

                          <div className="px-5 pb-5 space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Questions guidées & barème ({exercise.questions.length} questions) :
                            </div>

                            {exercise.questions.map((q, qIdx) => {
                              const qKey = `hub-${exercise.id}-${qIdx}`;
                              const currentHintLevel = revealedExHints[qKey] || 0;
                              const isSolutionVisible = !!revealedExSolutions[qKey];

                              return (
                                <div
                                  key={qIdx}
                                  className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                                      {q.questionText}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 shrink-0">
                                      [{q.pointsAllocated} pts]
                                    </span>
                                  </div>

                                  {currentHintLevel > 0 && (
                                    <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 rounded-lg space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
                                      {q.hints.slice(0, currentHintLevel).map((hint, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-2">
                                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                          <span>
                                            <strong>Indice {hIdx + 1} : </strong>
                                            {hint}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  <div className="flex items-center gap-3 pt-1">
                                    {currentHintLevel < q.hints.length && (
                                      <button
                                        onClick={() => {
                                          setRevealedExHints((prev) => ({
                                            ...prev,
                                            [qKey]: (prev[qKey] || 0) + 1
                                          }));
                                        }}
                                        className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                                      >
                                        <Lightbulb className="w-3 h-3" />
                                        <span>
                                          {currentHintLevel === 0 ? 'Afficher un indice' : 'Indice suivant'}
                                        </span>
                                      </button>
                                    )}

                                    <button
                                      onClick={() => {
                                        const nowVisible = !revealedExSolutions[qKey];
                                        setRevealedExSolutions((prev) => ({
                                          ...prev,
                                          [qKey]: nowVisible
                                        }));
                                        if (nowVisible) {
                                          handleGainXp(40, `Exercice thématique résolu (${exercise.title.slice(0, 30)}...)`);
                                        }
                                      }}
                                      className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline ml-auto flex items-center gap-1"
                                    >
                                      <span>{isSolutionVisible ? 'Masquer le corrigé' : 'Révéler la correction détaillée'}</span>
                                      {isSolutionVisible ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </button>
                                  </div>

                                  {isSolutionVisible && (
                                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-950/70 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                                        <div className="font-sans font-bold text-slate-900 dark:text-white mb-1">
                                          Démarche rédigée pas à pas :
                                        </div>
                                        {q.solutionSteps.map((step, sIdx) => (
                                          <div key={sIdx} className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold shrink-0">→</span>
                                            <span>{step}</span>
                                          </div>
                                        ))}
                                        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans font-semibold text-emerald-600 dark:text-emerald-400">
                                          Conclusion attendue : {q.finalAnswer}
                                        </div>
                                      </div>

                                      {q.bacTrap && (
                                        <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-lg text-xs text-rose-800 dark:text-rose-200 flex items-start gap-2">
                                          <span className="font-bold shrink-0">⚠️ Piège Bac :</span>
                                          <span>{q.bacTrap}</span>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* SECTION: REVISION TOOLS & 51 OUTILS BAC */}
            {currentSection === 'revision' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  {[
                    { id: 'tools_hub', label: '🧰 Boîte des 51 Outils Bac' },
                    { id: 'pomodoro', label: '⏱️ Pomodoro (25/5 min)' },
                    { id: 'bac', label: '🎯 Simulateur Coef 100' },
                    { id: 'flashcards', label: '🃏 Fiches Flash (SRS)' },
                    { id: 'formulas', label: '📐 Formulaire Intégral' },
                    { id: 'diagnostic', label: '🧭 Diagnostic Révision' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveRevisionTab(tab.id as typeof activeRevisionTab)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        activeRevisionTab === tab.id
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeRevisionTab === 'tools_hub' && (
                  <BacToolsHub
                    onGainXp={handleGainXp}
                    onOpenTool={(toolId) => {
                      if (toolId === 'pomodoro') setActiveRevisionTab('pomodoro');
                      else if (toolId === 'sim_bac') setActiveRevisionTab('bac');
                      else if (toolId.startsWith('formulaire_') || toolId === 'formulaire') setActiveRevisionTab('formulas');
                      else if (toolId === 'flashcards_leitner') setActiveRevisionTab('flashcards');
                      else if (toolId === 'diagnostic') setActiveRevisionTab('diagnostic');
                    }}
                  />
                )}
                {activeRevisionTab === 'flashcards' && (
                  <FlashcardDeck
                    progress={progress}
                    onUpdateFlashcardBox={handleUpdateFlashcardBox}
                    onGainXp={handleGainXp}
                  />
                )}
                {activeRevisionTab === 'pomodoro' && (
                  <PomodoroTimer onGainXp={handleGainXp} />
                )}
                {activeRevisionTab === 'bac' && (
                  <BacSimulator
                    progress={progress}
                    onSaveNotes={handleSaveBacNotes}
                    onGainXp={handleGainXp}
                  />
                )}
                {activeRevisionTab === 'formulas' && <FormulaSheet />}
                {activeRevisionTab === 'diagnostic' && (
                  <DiagnosticQuiz
                    progress={progress}
                    onSavePlan={handleSavePlan}
                    onGainXp={handleGainXp}
                  />
                )}
              </div>
            )}

            {/* SECTION: PROFILE & PROGRESSION */}
            {currentSection === 'profile' && (
              <StudentProfile
                progress={progress}
                onResetProgress={handleResetProgress}
              />
            )}

            {/* SECTION: MENTIONS LÉGALES */}
            {currentSection === 'legal' && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                        <Scale className="w-4 h-4" />
                        <span>INFORMATIONS RÉGLEMENTAIRES & CONFIDENTIALITÉ</span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                        Mentions Légales
                      </h1>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).
                      </p>
                    </div>

                    <button
                      onClick={() => navigateSection('curriculum')}
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Retour aux cours</span>
                    </button>
                  </div>

                  <div className="space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <section className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        1. Éditeur du site
                      </h2>
                      <p>
                        Le site <strong>Lycée Futur</strong> (accessible à l'adresse <a href="https://lyceefutur.com" className="text-sky-600 dark:text-sky-400 hover:underline">https://lyceefutur.com</a>) est une plateforme éducative gratuite dédiée aux élèves de Seconde, Première et Terminale.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                        <li><strong>Contact électronique :</strong> sharinghistories955@gmail.com</li>
                        <li><strong>Statut :</strong> Éditeur particulier / Projet pédagogique </li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        2. Hébergement
                      </h2>
                      <p>
                        Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">https://vercel.com</a>).
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        3. Propriété intellectuelle
                      </h2>
                      <p>
                        L'ensemble des ressources pédagogiques, fiches de cours, exercices corrigés, simulateurs interactifs, éléments graphiques et code source présents sur <strong>Lycée Futur</strong> sont protégés par le droit de la propriété intellectuelle.
                      </p>
                      <p>
                        La consultation, le téléchargement et l'impression des cours et exercices sont autorisés pour un usage strictement personnel, scolaire et éducatif. Toute reproduction, diffusion ou exploitation commerciale sans accord préalable de l'éditeur est interdite.
                      </p>
                    </section>

                    <section className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        4. Données personnelles, stockage local & Cookies
                      </h2>
                      <p>
                        <strong>Lycée Futur</strong> ne requiert aucune création de compte nominatif et ne collecte aucune donnée personnelle directement sur ses serveurs. Votre progression pédagogique (points XP, chapitres validés, simulateur de notes du Bac, préférences d'affichage) est enregistrée uniquement localement sur votre appareil via le stockage interne de votre navigateur (<em>localStorage</em>).
                      </p>
                      <p>
                        Afin de financer la gratuité intégrale de la plateforme et d'en mesurer la fréquentation, le site utilise des services tiers susceptibles de déposer des cookies :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                        <li>
                          <strong>Google Analytics (GA4) :</strong> mesure d'audience anonyme permettant d'améliorer l'ergonomie et les contenus pédagogiques.
                        </li>
                        <li>
                          <strong>Google AdSense :</strong> diffusion d'annonces publicitaires non intrusives. Google utilise des cookies pour diffuser des annonces adaptées aux centres d'intérêt des utilisateurs. Vous pouvez désactiver la personnalisation des annonces depuis les <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">Paramètres des annonces Google</a>.
                        </li>
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        5. Limitation de responsabilité
                      </h2>
                      <p>
                        Les cours, formulaires et corrigés proposés sur <strong>Lycée Futur</strong> sont rédigés en conformité avec les programmes officiels de l'Éducation Nationale à des fins d'accompagnement scolaire. Malgré le soin apporté à leur vérification, l'éditeur ne saurait être tenu responsable d'éventuelles erreurs ou omissions.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Clean Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-6 mb-16 md:mb-0 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">Lycée Futur</span>
            <span aria-hidden="true">·</span>
            <span>Programmes officiels du Ministère de l'Éducation Nationale</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/simulateurs" onClick={(e) => { e.preventDefault(); navigateSection('simulations'); }} className="hover:underline">Simulateurs Labo</a>
            <span>·</span>
            <a href="/exercices" onClick={(e) => { e.preventDefault(); navigateSection('exercises'); }} className="hover:underline">Exercices Corrigés</a>
            <span>·</span>
            <a href="/outils-bac" onClick={(e) => { e.preventDefault(); navigateSection('revision'); }} className="hover:underline">Outils Bac</a>
            <span>·</span>
            <a
              href="/mentions-legales"
              onClick={(e) => {
                e.preventDefault();
                navigateSection('legal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:underline ${currentSection === 'legal' ? 'text-sky-600 dark:text-sky-400 font-semibold' : ''}`}
            >
              Mentions légales
            </a>
          </div>
        </div>
      </footer>

      {/* Fixed Mobile Bottom Navigation Bar */}
      <nav
        aria-label="Navigation mobile"
        className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 shadow-2xl py-1.5 px-2 flex items-center justify-around safe-bottom"
      >
        {[
          { id: 'curriculum', label: 'Cours', icon: BookOpen },
          { id: 'simulations', label: 'Labo', badge: '22', icon: FlaskConical },
          { id: 'exercises', label: 'Exos', badge: '372', icon: FileCheck2 },
          { id: 'revision', label: 'Outils Bac', badge: '51', icon: Brain, isPrimary: true },
          { id: 'profile', label: 'Profil', icon: User },
        ].map((tab) => {
          const isActive = currentSection === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                navigateSection(tab.id as SectionId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all relative min-w-[56px] min-h-[44px] ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-bold scale-105'
                  : tab.isPrimary
                  ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
                {tab.badge && (
                  <span className={`absolute -top-1.5 -right-3 px-1 py-0.2 text-[9px] font-black rounded-full leading-none shadow-xs ${
                    tab.isPrimary ? 'bg-emerald-600 text-white' : 'bg-violet-600 text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}