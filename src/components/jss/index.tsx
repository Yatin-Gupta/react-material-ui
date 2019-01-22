import * as React from 'react';
import { ThemeProvider } from 'react-jss';
import StyledButton from './Button';
import StyledButton2 from './Button2';

export interface IndexProps {}

export interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  public state = {};
  private theme = {
    colorPrimary: '#000'
  };
  public render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={this.theme}>
          <StyledButton>Submit</StyledButton>
          <StyledButton2 labelColor={'green'}>Submit2</StyledButton2>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default Index;
