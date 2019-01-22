import * as React from 'react';
import injectSheet from 'react-jss';

// theme is not mandatory
const styles = (theme: any) => ({
  myButton: {
    '& span': {
      // jss-nested applied it to child span
      fontWeight: 'bold'
    },
    background: theme.colorPrimary,
    color: 'green',
    margin: {
      bottom: 0,
      left: '1rem',
      right: 0,
      top: 5
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
});

const buttonStatelessComponent = ({ classes, children }: any) => {
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

// @ts-ignore
export default injectSheet(styles)(buttonStatelessComponent);
