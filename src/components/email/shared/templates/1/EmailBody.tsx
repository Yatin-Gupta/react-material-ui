import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import style from './style';

const EmailBody = (props: any) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <body>
        <table id="bodyTable" className={classes.emailTable}>
          <thead />
          <tbody>
            <tr>
              <td>
                <table id="emailContainer" className={classes.emailContainer}>
                  <thead className={classes.emailHeader}>
                    <tr>
                      <td>Happy Office Hours</td>
                    </tr>
                  </thead>
                  <tbody className={classes.emailBody}>
                    <tr>
                      <td>
                        Hi [name], Thank you for showing interest in [your
                        product/service]. By taking this initial step, you are
                        already well on your way to meeting your [goals your
                        business can help your prospect meet]. For our
                        prospective customers, we [describe a special offer].
                        [Describe the unique value and benefits of your offer
                        for your audience.] Please let us know if you would like
                        us to help you find a [solution]! Give us a call/Email
                        us at [Insert your contact information]. Best regards,
                        [Your name]
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className={classes.emailHeader}>
                    <tr>
                      <td>Footer</td>
                    </tr>
                  </tfoot>
                </table>
              </td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </body>
    </React.Fragment>
  );
};

// @ts-ignore
export default withStyles(style)(EmailBody);
