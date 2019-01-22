export interface IExercise {
  id: string;
  title: string;
  description: string;
  muscles: string;
}

export interface IExerciseProps {
  title: string;
  description: string;
  muscles: string;
}

export interface IMuiContainerProps {}

export interface IMuiContainerState {
  exercise: IExerciseProps;
  lang: string;
  openExerciseFormDialog: boolean;
}

export interface IMuiViewProps {
  exercises: IExercise[];
  inputExercise: IExerciseProps;
  isExerciseDialogOpened: boolean;
  langs: string[];
  muscles: string[];
  onAdd: (e: any) => void;
  onExerciseDialogClose: (e: any) => void;
  onExerciseFormFieldChange: (e: any) => void;
  onLangChange: (e: any) => void;
  onListClick: (exerciseId: string) => (e: any) => void;
  onOpenExerciseDialog: (e: any) => void;
  onTabChange: (e: any, tabIndex: any) => void;
  selectedExercise: IExercise;
  selectedLang: string;
  selectedMuscles: string[];
  selectedTab: number;
}

export interface IMuiViewState {}
