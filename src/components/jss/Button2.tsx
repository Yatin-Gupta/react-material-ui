import * as React from 'react';
import injectStylesheet from 'react-jss';

export interface IButton2Props {
  classes: any;
  children: any;
}

export interface IButton2State {}

const styles = {
  myButton: {
    padding: (props: any) => props.spacing
  },
  myLabel: (props: any) => ({
    color: props.labelColor,
    display: 'block',
    fontStyle: props.fontStyle,
    fontWeight: props.fontWeight
  })
};

class Button2 extends React.Component<IButton2Props, IButton2State> {
  public static defaultProps = {
    fontWeight: 'bold',
    labelColor: 'red',
    spacing: 10
  };
  public state = {};

  public render() {
    return (
      <button className={this.props.classes.myButton}>
        <span className={this.props.classes.myLabel}>
          {this.props.children}
        </span>
      </button>
    );
  }
}

// @ts-ignore
export default injectStylesheet(styles)(Button2);
