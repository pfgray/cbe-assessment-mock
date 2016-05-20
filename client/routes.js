import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistory } from 'react-router-redux';

import reducer from './store/rootReducer';
import App from './App';
import Welcome from './welcome/Welcome';
import Assessment from './assessment/Assessment';

const browserHistory = createBrowserHistory();
const reduxRouterMiddleware = syncHistory(browserHistory);
const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(reduxRouterMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer);

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="/assessment" component={Assessment}/>
      </Route>
    </Router>
  </Provider>
);
export default Routes;
