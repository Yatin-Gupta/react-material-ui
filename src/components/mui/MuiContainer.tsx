import * as React from 'react';
import dataStore from './DataStore';
import MuiView from './MuiView';

import {
  IExercise,
  IExerciseProps,
  IMuiContainerProps,
  IMuiContainerState
} from './model';

class MuiContainer extends React.Component<
  IMuiContainerProps,
  IMuiContainerState
> {
  public state = {
    exercise: {} as IExerciseProps, // values that will be filled in exercise form
    lang: 'en', // lang in which page is operating
    openExerciseFormDialog: false // responsible for open/close of exercise form dialog
  };

  private dataStore: { muscles: string[]; exercises: IExercise[] }; // Exercise and Muscles Data
  private langs: string[] = []; // Supported Langs

  private selectedExercise: IExercise; // User selected exercise
  private selectedTab: number = 0; // User selected muscle tab
  // User selected muscles
  // For All case there are more than 1 muscles, otherwise only 1 muscle in the array
  private selectedMuscles: string[] = [];

  constructor(props: IMuiContainerProps) {
    super(props);
    // Initializing the exercise and muscles data according to lang.
    this.dataStore = dataStore.getStore(this.state.lang);
    this.selectedMuscles = this.dataStore.muscles;

    // Binding functions with this to prevent implicit lost of this reference.
    this.addExerciseHandler = this.addExerciseHandler.bind(this);
    this.changeExerciseFormFieldHandler = this.changeExerciseFormFieldHandler.bind(
      this
    );
    this.changeTabHandler = this.changeTabHandler.bind(this);
    this.handleDialogOnClose = this.handleDialogOnClose.bind(this);
    this.initializeExercise = this.initializeExercise.bind(this);
    this.langChangeHandler = this.langChangeHandler.bind(this);
    this.listClickHandler = this.listClickHandler.bind(this);
    this.openExerciseFormDialog = this.openExerciseFormDialog.bind(this);

    // In constructor to set state we don't need to call setState.
    // Initialization code.
    this.state.exercise = {
      description: '',
      muscles: this.dataStore.muscles[0],
      title: ''
    };
    this.langs = ['en', 'fr'];
  }

  /*
   * Input: void
   * Output: JSX Expression
   */
  public render() {
    return (
      <MuiView
        exercises={this.dataStore.exercises}
        inputExercise={this.state.exercise}
        isExerciseDialogOpened={this.state.openExerciseFormDialog}
        selectedExercise={this.selectedExercise}
        selectedLang={this.state.lang}
        selectedMuscles={this.selectedMuscles}
        selectedTab={this.selectedTab}
        langs={this.langs}
        muscles={this.dataStore.muscles}
        onExerciseDialogClose={this.handleDialogOnClose}
        onAdd={this.addExerciseHandler}
        onExerciseFormFieldChange={this.changeExerciseFormFieldHandler}
        onTabChange={this.changeTabHandler}
        onLangChange={this.langChangeHandler}
        onListClick={this.listClickHandler}
        onOpenExerciseDialog={this.openExerciseFormDialog}
      />
    );
  }

  /*
   * Input: Button Click Event
   * Output: void
   */
  private addExerciseHandler(e: any) {
    const { exercise } = this.state;
    dataStore.addExerciseInStore(
      exercise.title,
      exercise.description,
      exercise.muscles
    );
    this.dataStore = dataStore.getStore();
    this.handleDialogOnClose(e);
  }

  /*
   * Input: Form Fields Change Event
   * Output: void
   */
  private changeExerciseFormFieldHandler(e: any) {
    const { exercise } = this.state;
    const { name, value } = e.target;
    exercise[name] = value;
    this.setState({ exercise });
  }

  /*
   * Input: Tab Button Click Event, Tab Index
      0 -> All Muscles
      1 - n -> Muscle count in muscles array + 1 
   * Output: void
   */
  private changeTabHandler(e: any, tabIndex: any) {
    const { muscles } = this.dataStore;
    this.selectedMuscles = tabIndex === 0 ? muscles : [muscles[tabIndex - 1]];
    this.selectedTab = tabIndex;
    // To re-render the component
    this.setState({});
  }

  /*
   * Input: Dialog Close Button Click Event
   * Output: void
   */
  private handleDialogOnClose(e: any) {
    this.setState({ openExerciseFormDialog: false });
  }

  /*
   * Input: void
   * Output: void
   */
  private initializeExercise() {
    // Empty the exercise form in dialog.
    this.setState({
      exercise: {
        description: '',
        muscles: this.dataStore.muscles[0],
        title: ''
      }
    });
  }

  /*
   * Input: Lang Select Change Event
   * Output: void
   */
  private langChangeHandler(e: any) {
    const { value }: { value: string } = e.target;
    if (value !== this.state.lang && this.langs.indexOf(value) > -1) {
      const prevDataStore = this.dataStore;
      this.dataStore = dataStore.getStore(value);
      // Changing selected muscles content according to lang.
      if (this.selectedMuscles.length > 1) {
        this.selectedMuscles = this.dataStore.muscles;
      } else {
        this.selectedMuscles = [
          this.dataStore.muscles[
            prevDataStore.muscles.indexOf(this.selectedMuscles[0])
          ]
        ];
      }
      // Changing selected exercise content according to lang.
      if (this.selectedExercise) {
        const selectedExercise = this.dataStore.exercises.filter(
          (exercise: IExercise) => {
            return exercise.id === this.selectedExercise.id;
          }
        );
        if (selectedExercise && selectedExercise[0]) {
          this.selectedExercise = selectedExercise[0];
        }
      }
      this.setState({ lang: value });
    }
    // Otherwise Do Nothing
  }

  /*
   * Input: exercise id:string
   * Output: void
   */
  private listClickHandler(exerciseId: string) {
    return (e: any) => {
      // Get exercise that has same id that is provided in input.
      const selectedExercise = this.dataStore.exercises.filter(
        (exercise: IExercise) => {
          return exercise.id === exerciseId;
        }
      );
      // Error Handling - If exercise exist of id that is provided in input.
      if (selectedExercise && selectedExercise[0]) {
        this.selectedExercise = selectedExercise[0];
      }
      this.setState({});
    };
  }

  /*
   * Input: Exercise Form open button click event.
   * Output: void
   */
  private openExerciseFormDialog(e: any) {
    this.initializeExercise();
    this.setState({ openExerciseFormDialog: true });
  }
}

export default MuiContainer;
