import * as React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from 'reactstrap';
import { ILoginViewProps, ILoginViewState } from './model';

class LoginView extends React.Component<ILoginViewProps, ILoginViewState> {
  public state = {};

  constructor(props: ILoginViewProps) {
    super(props);
    this._changeHandler = this._changeHandler.bind(this);
  }

  public render() {
    const { loginData, loginHeading } = this.props;
    return (
      <React.Fragment>
        <Container className="login-top-spacing">
          <Row>
            <Col lg="12">
              <h5>{loginHeading}</h5>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    invalid={true}
                    type="email"
                    name="email"
                    onChange={this._changeHandler}
                    placeholder="Enter Email"
                    value={loginData.email}
                  />
                  <FormFeedback>Error Happens</FormFeedback>
                  <FormText>We will not be sharing email with anyone.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={this._changeHandler}
                    placeholder="Enter Password"
                    value={loginData.password}
                  />
                  <FormFeedback>Error Happens</FormFeedback>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  private _changeHandler(e: React.FormEvent<HTMLInputElement>) {
    return this.props.onChange(e.currentTarget.name, e.currentTarget.value);
  }
}

export default LoginView;
