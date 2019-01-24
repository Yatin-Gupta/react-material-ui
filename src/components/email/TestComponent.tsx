import * as React from 'react';
import Email from './shared/Email';
import EmailHeader from './shared/EmailHeader';
import EmailBody from './shared/templates/1/EmailBody';
export default (props: any) => {
  return (
    <React.Fragment>
      <Email>
        <EmailHeader title={'My Custom Title'} />
        <EmailBody />
      </Email>
    </React.Fragment>
  );
};
