export interface IExercise {
  id: string;
  title: string;
  description: string;
  muscles: string;
}

export interface IExerciseFormProps {
  getMusclesMenuItems: () => JSX.Element[];
  inputExercise: IExerciseProps;
  style: any;
  onExerciseFormFieldChange: (e: any) => void;
}

export interface IExerciseFormState {}

export interface IExerciseProps {
  title: string;
  description: string;
  muscles: string;
}

export interface IMuiContainerProps {}

export interface IMuiContainerState {
  exercise: IExerciseProps;
  exerciseEditMode: boolean;
  lang: string;
  openExerciseFormDialog: boolean;
}

export interface IMuiViewProps {
  exercises: IExercise[];
  exerciseEditMode: boolean;
  inputExercise: IExerciseProps;
  isExerciseDialogOpened: boolean;
  langs: string[];
  muscles: string[];
  onAdd: (e: any) => void;
  onDeleteExercise: (exerciseId: string) => (e: any) => void;
  onDisableEditMode: () => void;
  onEditExercise: (exerciseId: string) => (e: any) => void;
  onExerciseDialogClose: (e: any) => void;
  onExerciseFormFieldChange: (e: any) => void;
  onLangChange: (e: any) => void;
  onListClick: (exerciseId: string) => (e: any) => void;
  onOpenExerciseDialog: (e: any) => void;
  onSaveExercise: () => (e: any) => void;
  onTabChange: (e: any, tabIndex: any) => void;
  selectedExercise: IExercise | undefined;
  selectedLang: string;
  selectedMuscles: string[];
  selectedTab: number;
}

export interface IMuiViewState {}
