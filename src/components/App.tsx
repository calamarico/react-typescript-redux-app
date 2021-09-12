import React from 'react';
import { Provider } from 'react-redux';
import { Store, createStore, compose } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { IStoreState, rootReducer } from '../reducers';
import Login from './Login';
import Taxes from './Taxes';
import FormSub from './Form';
import Submissions from './Submissions';
import AllSubmissions from './AllSubmissions';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<IStoreState> = createStore(
  rootReducer,
  composeEnhancers(),
);

/**
 * App component.
 * The container for the react app.
 */
export const App: React.FC = () => (
  // TODO: I used the redux Provider for share the store across all Route childs,
  // but still need to connect components.
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/taxes" component={Taxes} />
        <Route path="/taxes/:id/form" component={FormSub} />
        <Route path="/submissions" component={AllSubmissions} />
        <Route path="/taxes/:id/submissions" component={Submissions} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </Router>
  </Provider>
);
