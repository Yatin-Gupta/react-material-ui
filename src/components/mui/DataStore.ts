import { IExercise } from './model';
const dataStore: { muscles: string[]; exercises: IExercise[] } = {
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
};

const getStore = () => {
  return dataStore;
};

const addExerciseInStore = (
  title: string,
  description: string,
  muscles: string
) => {
  if (dataStore.muscles.indexOf(muscles) > -1) {
    dataStore.exercises.push({
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
