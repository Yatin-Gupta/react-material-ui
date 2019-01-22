import * as React from 'react';

const withClassName = (ComponentClass: any) => {
  return (props: any): JSX.Element => (
    <ComponentClass {...props} className="MyNewClass" />
  );
};

export default withClassName;
