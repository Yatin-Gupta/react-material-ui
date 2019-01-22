import * as React from 'react';
import ChildComponent from './ChildComponent';
import SecondChildComponent from './SecondChildComponent';
import withClassName from './withClassName';

export interface IParentComponentProps {}

export interface IParentComponentState {}

class ParentComponent extends React.Component<
  IParentComponentProps,
  IParentComponentState
> {
  public state = {};
  private enhancedChildComponent: any;
  private enhancedSecondChildComponent: any;
  constructor(props: IParentComponentProps) {
    super(props);
    this.enhancedChildComponent = withClassName(ChildComponent);
    this.enhancedSecondChildComponent = withClassName(SecondChildComponent);
  }
  public render() {
    return (
      <React.Fragment>
        <this.enhancedChildComponent />
        <this.enhancedSecondChildComponent />
      </React.Fragment>
    );
  }
}

export default ParentComponent;
