import React from 'react';
import GreetingContainer from './greeting_container';
import { Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

      <AuthRoute component={SessionFormContainer} path="/login"  />
      <AuthRoute component={SessionFormContainer} path="/signup"  />
  </div>
);

export default App;
