import * as React from 'react';

const EmailTitle = (props: any) => {
  const { children } = props;
  return <title>{children}</title>;
};

export default EmailTitle;
