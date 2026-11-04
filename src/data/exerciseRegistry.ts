import { Chapter, SolvedExercise } from '../types';
import { EXERCISE_BANK_2NDE_MATHS, BankExerciseItem } from './exerciseBank2ndeMaths';
import { EXERCISE_BANK_2NDE_PC } from './exerciseBank2ndePC';
import { EXERCISE_BANK_2NDE_SVT } from './exerciseBank2ndeSVT';
import { EXERCISE_BANK_1ERE_MATHS } from './exerciseBank1ereMaths';
import { EXERCISE_BANK_1ERE_PC } from './exerciseBank1erePC';
import { EXERCISE_BANK_1ERE_SVT } from './exerciseBank1ereSVT';
import { EXERCISE_BANK_TERMINALE_MATHS } from './exerciseBankTerminaleMaths';
import { EXERCISE_BANK_TERMINALE_PC } from './exerciseBankTerminalePC';
import { EXERCISE_BANK_TERMINALE_SVT } from './exerciseBankTerminaleSVT';

export const ALL_BANK_EXERCISES: BankExerciseItem[] = [
  ...EXERCISE_BANK_2NDE_MATHS,
  ...EXERCISE_BANK_2NDE_PC,
  ...EXERCISE_BANK_2NDE_SVT,
  ...EXERCISE_BANK_1ERE_MATHS,
  ...EXERCISE_BANK_1ERE_PC,
  ...EXERCISE_BANK_1ERE_SVT,
  ...EXERCISE_BANK_TERMINALE_MATHS,
  ...EXERCISE_BANK_TERMINALE_PC,
  ...EXERCISE_BANK_TERMINALE_SVT
];

/**
 * Attaches the additional bank exercises to their designated target chapters.
 * Ensures every subject at every grade level contains at least 30 detailed, solved exercises.
 */
export function enrichChaptersWithBankExercises(chapters: Chapter[]): Chapter[] {
  // Map of chapterId -> additional exercises
  const additionalMap = new Map<string, SolvedExercise[]>();

  ALL_BANK_EXERCISES.forEach((item) => {
    const list = additionalMap.get(item.targetChapterId) || [];
    // remove targetChapterId property to conform strictly to SolvedExercise
    const { targetChapterId, ...exercise } = item;
    list.push(exercise);
    additionalMap.set(targetChapterId, list);
  });

  return chapters.map((chap) => {
    const extra = additionalMap.get(chap.id);
    if (!extra || extra.length === 0) {
      return chap;
    }
    return {
      ...chap,
      exercises: [...chap.exercises, ...extra]
    };
  });
}
