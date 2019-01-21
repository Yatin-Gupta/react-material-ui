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
    exercise: {} as IExerciseProps,
    openExerciseFormDialog: false
  };

  private dataStore: { muscles: string[]; exercises: IExercise[] };

  private selectedExercise: IExercise;
  private selectedTab: number = 0;
  private selectedMuscles: string[] = [];

  constructor(props: IMuiContainerProps) {
    super(props);
    // In constructor to set state we don't need to call setState.
    this.dataStore = dataStore.getStore();
    this.selectedMuscles = this.dataStore.muscles;
    this.addExerciseHandler = this.addExerciseHandler.bind(this);
    this.changeExerciseFormFieldHandler = this.changeExerciseFormFieldHandler.bind(
      this
    );
    this.changeTabHandler = this.changeTabHandler.bind(this);
    this.handleDialogOnClose = this.handleDialogOnClose.bind(this);
    this.initializeExercise = this.initializeExercise.bind(this);
    this.listClickHandler = this.listClickHandler.bind(this);
    this.openExerciseFormDialog = this.openExerciseFormDialog.bind(this);
    this.state.exercise = {
      description: '',
      muscles: this.dataStore.muscles[0],
      title: ''
    };
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
        selectedMuscles={this.selectedMuscles}
        selectedTab={this.selectedTab}
        muscles={this.dataStore.muscles}
        onExerciseDialogClose={this.handleDialogOnClose}
        onAdd={this.addExerciseHandler}
        onExerciseFormFieldChange={this.changeExerciseFormFieldHandler}
        onTabChange={this.changeTabHandler}
        onListClick={this.listClickHandler}
        onOpenExerciseDialog={this.openExerciseFormDialog}
      />
    );
  }

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

  private changeExerciseFormFieldHandler(e: any) {
    const { exercise } = this.state;
    const { name, value } = e.target;
    exercise[name] = value;
    this.setState({ exercise });
  }

  private changeTabHandler(e: any, tabIndex: any) {
    const { muscles } = this.dataStore;
    this.selectedMuscles = tabIndex === 0 ? muscles : [muscles[tabIndex - 1]];
    this.selectedTab = tabIndex;
    this.setState({});
  }

  private handleDialogOnClose(e: any) {
    this.setState({ openExerciseFormDialog: false });
  }

  private initializeExercise() {
    this.setState({
      exercise: {
        description: '',
        muscles: this.dataStore.muscles[0],
        title: ''
      }
    });
  }

  private listClickHandler(exerciseId: string) {
    return (e: any) => {
      const selectedExercise = this.dataStore.exercises.filter(
        (exercise: IExercise) => {
          return exercise.id === exerciseId;
        }
      );
      if (selectedExercise && selectedExercise[0]) {
        this.selectedExercise = selectedExercise[0];
      }
      this.setState({});
    };
  }

  private openExerciseFormDialog(e: any) {
    this.initializeExercise();
    this.setState({ openExerciseFormDialog: true });
  }
}

export default MuiContainer;
