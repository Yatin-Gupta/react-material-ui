import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { IExercise, IMuiViewProps, IMuiViewState } from './model';
import ExerciseForm from './shared/ExerciseForm';

class MuiView extends React.Component<IMuiViewProps, IMuiViewState> {
  public state = {};

  private style = {
    borderWhite: {
      border: '#fff'
    },
    mlAuto: {
      marginLeft: 'auto'
    },
    paper: {
      height: '500px',
      overflowY: 'auto' as 'auto',
      padding: '20px'
    },
    w100: {
      width: '100%'
    }
  };

  private exercisesByMuscles: { [muscle: string]: IExercise[] } = {};

  constructor(props: IMuiViewProps) {
    super(props);

    this.getExerciseByMuscles = this.getExerciseByMuscles.bind(this);
    this.getExerciseEditForm = this.getExerciseEditForm.bind(this);
    this.getLangSelectBox = this.getLangSelectBox.bind(this);
    this.getMuscleAndExerciseList = this.getMuscleAndExerciseList.bind(this);
    this.getMusclesMenuItems = this.getMusclesMenuItems.bind(this);
    this.getMusclesTabs = this.getMusclesTabs.bind(this);

    this.getExerciseByMuscles();
  }

  public render() {
    const {
      exerciseEditMode,
      inputExercise,
      isExerciseDialogOpened,
      onExerciseDialogClose,
      onExerciseFormFieldChange,
      onLangChange,
      onOpenExerciseDialog,
      selectedExercise,
      selectedLang
    } = this.props;
    return (
      <React.Fragment>
        <header>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Exercise Database
              </Typography>
              {/* Lang Selector */}
              <FormControl
                style={{ ...this.style.mlAuto, ...this.style.borderWhite }}
              >
                <Select
                  value={selectedLang}
                  displayEmpty={true}
                  name="lang"
                  onChange={onLangChange}
                >
                  {this.getLangSelectBox()}
                </Select>
              </FormControl>

              <Fab
                aria-label="Add"
                color="default"
                onClick={onOpenExerciseDialog}
                style={this.style.mlAuto}
              >
                <AddIcon />
              </Fab>
            </Toolbar>
          </AppBar>
        </header>

        <section id="dialog">
          <Dialog
            open={isExerciseDialogOpened}
            onClose={onExerciseDialogClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Add Exercise</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please provide detail for adding exercise.
              </DialogContentText>
              <ExerciseForm
                getMusclesMenuItems={this.getMusclesMenuItems}
                inputExercise={inputExercise}
                style={this.style}
                onExerciseFormFieldChange={onExerciseFormFieldChange}
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={onExerciseDialogClose}>
                Cancel
              </Button>
              <Button color="primary" onClick={this.props.onAdd}>
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </section>

        <section id="body">
          <Grid container={true}>
            <Grid item={true} sm={6} xs={12}>
              <Paper style={this.style.paper}>
                {this.getMuscleAndExerciseList()}
              </Paper>
            </Grid>
            <Grid item={true} sm={6} xs={12}>
              <Paper style={this.style.paper}>
                {exerciseEditMode ? (
                  this.getExerciseEditForm()
                ) : (
                  <React.Fragment>
                    <Typography variant="h4" gutterBottom={true}>
                      {selectedExercise ? selectedExercise.title : 'Welcome'}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom={true}>
                      {selectedExercise
                        ? selectedExercise.description
                        : 'Please select any exercise.'}
                    </Typography>
                  </React.Fragment>
                )}
              </Paper>
            </Grid>
          </Grid>
        </section>

        <footer>
          <Paper>
            <Tabs
              value={this.props.selectedTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.props.onTabChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label={'All'} />
              {this.getMusclesTabs()}
            </Tabs>
          </Paper>
        </footer>
      </React.Fragment>
    );
  }

  private getExerciseAsList(muscle: string) {
    if (this.exercisesByMuscles[muscle]) {
      return this.exercisesByMuscles[muscle].map(exercise => (
        <ListItem
          button={true}
          key={exercise.id}
          onClick={this.props.onListClick(exercise.id)}
        >
          <ListItemText primary={exercise.title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={this.props.onDeleteExercise(exercise.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="Create"
              onClick={this.props.onEditExercise(exercise.id)}
            >
              <CreateIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ));
    }
    return <ListItem />;
  }

  private getExerciseByMuscles() {
    this.exercisesByMuscles = this.props.exercises.reduce(
      (accumulator: any, exercise: IExercise) => {
        if (exercise.muscles in accumulator) {
          accumulator[exercise.muscles].push(exercise);
        } else {
          accumulator[exercise.muscles] = [exercise];
        }
        return accumulator;
      },
      {}
    );
  }

  private getExerciseEditForm() {
    const {
      inputExercise,
      onExerciseFormFieldChange,
      onSaveExercise
    } = this.props;
    return (
      <React.Fragment>
        <ExerciseForm
          getMusclesMenuItems={this.getMusclesMenuItems}
          inputExercise={inputExercise}
          style={this.style}
          onExerciseFormFieldChange={onExerciseFormFieldChange}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={onSaveExercise()}>
          Edit Exercise
        </Button>
      </React.Fragment>
    );
  }

  private getLangSelectBox() {
    return this.props.langs.map((lang: string) => {
      return (
        <MenuItem value={lang} key={lang}>
          {lang}
        </MenuItem>
      );
    });
  }

  private getMuscleAndExerciseList() {
    this.getExerciseByMuscles();
    const mappedResult = this.props.selectedMuscles.map(muscle => (
      <React.Fragment key={muscle}>
        <Typography variant="h6" color="inherit">
          {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
        </Typography>
        <List component="nav">{this.getExerciseAsList(muscle)}</List>
      </React.Fragment>
    ));
    return mappedResult;
  }

  private getMusclesMenuItems() {
    return this.props.muscles.map(muscle => {
      return (
        <MenuItem value={muscle.toLowerCase()} key={muscle}>
          {muscle.charAt(0).toUpperCase() + muscle.slice(1)}
        </MenuItem>
      );
    });
  }

  private getMusclesTabs() {
    return this.props.muscles.map(muscle => {
      return <Tab label={muscle} key={muscle} />;
    });
  }
}

export default MuiView;
