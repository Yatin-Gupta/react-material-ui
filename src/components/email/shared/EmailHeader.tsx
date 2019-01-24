import * as React from 'react';
import EmailTitle from './EmailTitle';
const EmailHeader = (props: any) => (
  <React.Fragment>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <EmailTitle>{props.title}</EmailTitle>
    </head>
  </React.Fragment>
);

export default EmailHeader;
