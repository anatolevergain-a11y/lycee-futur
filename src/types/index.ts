export type GradeLevel = '2nde' | '1ere' | 'terminale';

export type SubjectId = 'maths' | 'physique-chimie' | 'svt';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SolvedExercise {
  id: string;
  title: string;
  context: string;
  difficulty: 'Facile' | 'Moyen' | 'Type Bac' | 'Approfondissement';
  points: number;
  themeTag?: 'gaming' | 'space' | 'tech' | 'sport' | 'cinema' | 'ecologie' | 'science';
  themeLabel?: string;
  questions: {
    questionText: string;
    hints: string[];
    solutionSteps: string[];
    finalAnswer: string;
    pointsAllocated: number;
    bacTrap?: string;
  }[];
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  gradeLevel: GradeLevel;
  title: string;
  officialCode: string;
  description: string;
  estimatedMinutes: number;
  summaryHighlights: string[];
  keyFormulas: { label: string; formula: string; explanation: string }[];
  simulationId?: string;
  courseSections: {
    title: string;
    content: string[];
    example?: { title: string; text: string };
    proTip?: string;
  }[];
  exercises: SolvedExercise[];
  quiz: QuizQuestion[];
}

export interface Flashcard {
  id: string;
  subjectId: SubjectId;
  gradeLevel: GradeLevel;
  chapterTitle: string;
  question: string;
  answer: string;
  formula?: string;
  mnemonic?: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  streakDays: number;
  lastStudyDate: string;
  completedChapters: Record<
    string,
    {
      courseRead: boolean;
      exercisesCompleted: string[];
      quizScore?: number;
      bestQuizScore?: number;
    }
  >;
  unlockedBadgeIds: string[];
  flashcardBox: Record<string, number>; // cardId -> box (1, 2, 3, 4)
  bacSimulatorNotes: Record<string, number>;
  personalizedPlan?: {
    weakChapters: string[];
    suggestedFocus: string;
    generatedAt: string;
  };
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'xp' | 'streak' | 'maths' | 'science' | 'svt' | 'mastery';
  condition: (progress: UserProgress) => boolean;
}
