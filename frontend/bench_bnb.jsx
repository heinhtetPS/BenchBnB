import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logIn, logOut, signUp } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
        store = configureStore();
    }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBenches = fetchBenches;
  ReactDOM.render(<Root store={store} />, root);
});

window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;
