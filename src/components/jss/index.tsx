import * as React from 'react';
import StyledButton from './Button';
import StyledButton2 from './Button2';

export interface IndexProps {}

export interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  public state = {};
  public render() {
    return (
      <React.Fragment>
          <StyledButton>Submit</StyledButton>
          <StyledButton2 labelColor={'green'}>Submit2</StyledButton2>
      </React.Fragment>
    );
  }
}

export default Index;
