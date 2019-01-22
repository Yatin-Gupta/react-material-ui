import { IExercise } from './model';
const dataStore: {
  [locale: string]: { muscles: string[]; exercises: IExercise[] };
} = {
  en: {
    exercises: [
      {
        description: 'Delts exercise...',
        id: 'overhead-press',
        muscles: 'shoulders',
        title: 'Overhead Press'
      },
      {
        description: 'Triceps exercise...',
        id: 'dips',
        muscles: 'arms',
        title: 'Dips'
      },
      {
        description: 'Biceps exercise...',
        id: 'barbell-curls',
        muscles: 'arms',
        title: 'Barbell Curls'
      },
      {
        description: 'Chest exercise...',
        id: 'bench-press',
        muscles: 'chest',
        title: 'Bench Press'
      },
      {
        description: 'Back and biceps exercise...',
        id: 'pull-ups',
        muscles: 'back',
        title: 'Pull Ups'
      },
      {
        description: 'Back and leg exercise...',
        id: 'deadlifts',
        muscles: 'back',
        title: 'Deadlifts'
      },
      {
        description: 'Legs exercise...',
        id: 'squats',
        muscles: 'legs',
        title: 'Squats'
      }
    ],
    muscles: ['shoulders', 'chest', 'arms', 'back', 'legs']
  },
  fr: {
    exercises: [
      {
        description: 'Delts exercice ...',
        id: 'overhead-press',
        muscles: 'épaules',
        title: 'Presse aérienne'
      },
      {
        description: 'Triceps exercice ...',
        id: 'dips',
        muscles: 'bras',
        title: 'Trempettes'
      },
      {
        description: 'Exercice de biceps',
        id: 'barbell-curls',
        muscles: 'bras',
        title: 'Barbell Curls'
      },
      {
        description: 'Exercice de la poitrine ...',
        id: 'bench-press',
        muscles: 'poitrine',
        title: 'Presse de banc'
      },
      {
        description: 'Exercice du dos et du biceps ...',
        id: 'pull-ups',
        muscles: 'retour',
        title: 'Pull Ups'
      },
      {
        description: 'Exercice du dos et des jambes ...',
        id: 'deadlifts',
        muscles: 'retour',
        title: 'Deadlifts'
      },
      {
        description: 'Exercice des jambes',
        id: 'squats',
        muscles: 'jambes',
        title: 'Squats'
      }
    ],
    muscles: ['épaules', 'poitrine', 'bras', 'retour', 'jambes']
  }
};

const getStore = (lang: string = 'en') => {
  return dataStore[lang];
};

const addExerciseInStore = (
  title: string,
  description: string,
  muscles: string,
  lang: string = 'en'
) => {
  if (dataStore[lang].muscles.indexOf(muscles) > -1) {
    dataStore[lang].exercises.push({
      description,
      id: title + muscles,
      muscles,
      title
    });
  }
};

export default {
  addExerciseInStore,
  getStore
};
