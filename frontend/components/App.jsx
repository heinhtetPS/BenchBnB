import React from 'react';
import GreetingContainer from './greeting_container';
import { Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';
import benchIndexContainer from './bench_index_container';
import SearchContainer from './search_container';


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

      <AuthRoute path="/login" component={ SessionFormContainer }  />
      <AuthRoute path="/signup" component={ SessionFormContainer }   />
      <Route exact path="/"   component={ SearchContainer } />
  </div>
);

export default App;
