import * as React from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedRelative,
  FormattedTime
} from 'react-intl';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ILocaleViewProps, ILocaleViewState } from './model';

class LocaleView extends React.Component<ILocaleViewProps, ILocaleViewState> {
  public state = {};
  constructor(props: ILocaleViewProps) {
    super(props);
    this._changeHandler = this._changeHandler.bind(this);
  }
  public render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg="12">Select Lang to convert content in it</Col>
          </Row>
          <Row>
            <Col lg="12">
              <Form>
                <FormGroup>
                  <Label for="langSelect">Select Lang</Label>
                  <Input
                    type="select"
                    name="select"
                    id="langSelect"
                    onChange={this._changeHandler}
                  >
                    {this.getLangOptions()}
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h1>
                <FormattedMessage
                  id="helloworld"
                  defaultMessage="Hello World"
                  values={{ name: 'Yatin' }}
                />
              </h1>
              <p>
                <FormattedNumber value={123456789.12} />
              </p>
              <p>
                <FormattedDate value={new Date()} />
              </p>
              <p>
                <FormattedTime value={new Date()} />
              </p>
              <p>
                <FormattedRelative value={new Date()} />
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  private _changeHandler(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onChange(e.currentTarget.name, e.currentTarget.value);
  }

  private getLangOptions() {
    const langs = this.props.langs;
    const langsHTML = langs.map(lang => {
      if (this.props.lang === lang) {
        return (
          <option key={lang} value={lang}>
            {lang}
          </option>
        );
      } else {
        return (
          <option key={lang} value={lang}>
            {lang}
          </option>
        );
      }
    });
    return langsHTML;
  }
}

export default LocaleView;
