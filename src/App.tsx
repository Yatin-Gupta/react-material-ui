import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import components to route
import TestComponent from './components/email/TestComponent';
import ParentComponent from './components/hoc/ParentComponent';
import Index from './components/jss/index';
import LocaleProvider from './components/local/LocaleProvider';
import LoginProvider from './components/login/LoginProvider';
import MuiContainer from './components/mui/MuiContainer';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route component={LoginProvider} path="/login" />
          <Route component={LocaleProvider} path="/locale" />
          <Route component={MuiContainer} path="/mui" />
          <Route component={ParentComponent} path="/pc" />
          <Route component={Index} path="/jssindex" />
          <Route component={TestComponent} path="/testemail" />
        </Switch>
      </Router>
    );
  }
}

export default App;
