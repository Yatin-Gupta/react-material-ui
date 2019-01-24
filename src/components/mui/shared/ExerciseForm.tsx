import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { IExerciseFormProps, IExerciseFormState } from './../model';

class ExerciseForm extends React.Component<
  IExerciseFormProps,
  IExerciseFormState
> {
  public state = {};
  public render() {
    const {
      getMusclesMenuItems,
      inputExercise,
      style,
      onExerciseFormFieldChange
    } = this.props;
    return (
      <React.Fragment>
        <TextField
          id="exercise-title"
          name="title"
          label="Exercise Title"
          onChange={onExerciseFormFieldChange}
          value={inputExercise.title}
          margin="normal"
          style={style.w100}
        />
        <br />
        <TextField
          id="exercise-description"
          name="description"
          label="Multiline"
          multiline={true}
          onChange={onExerciseFormFieldChange}
          rowsMax="4"
          value={inputExercise.description}
          margin="normal"
          style={style.w100}
        />
        <br />
        <FormControl style={style.w100}>
          <InputLabel htmlFor="exercise-muscle">Muscles</InputLabel>
          <Select
            value={inputExercise.muscles}
            onChange={onExerciseFormFieldChange}
            inputProps={{
              id: 'exercise-muscle',
              name: 'muscles'
            }}
          >
            {getMusclesMenuItems()}
          </Select>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default ExerciseForm;
