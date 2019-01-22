import * as React from 'react';

export interface IChidlComponentProps {
  className: string;
}

export interface IChidlComponentState {}

class ChidlComponent extends React.Component<
  IChidlComponentProps,
  IChidlComponentState
> {
  public state = {};
  public render() {
    return (
      <React.Fragment>
        {' '}
        Second Child Components{this.props.className}
      </React.Fragment>
    );
  }
}

export default ChidlComponent;
