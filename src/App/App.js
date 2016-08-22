import 'babel-polyfill';

import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from '../redux/createStore';
import rootSaga from '../redux/sagas';

import Page from '../Page/Page';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import ReduxExample from '../ReduxExample/ReduxExample';
import GithubSearch from '../GithubSearch/GithubSearch';

const styles = require('./App.scss');

// Set redux store
const store = configureStore();
store.runSaga(rootSaga);

const Container = (props) => (
  <div>
    <h1>App</h1>
    <ul className={styles.menu}>
      <li><Link to="/">/</Link></li>
      <li><Link to="/page">Page</Link></li>
      <li><Link to="/redux-example">Redux Example</Link></li>
      <li><Link to="/github-search">Github search</Link></li>
    </ul>
    {props.children}
  </div>
);
Container.propTypes = {
  children: React.PropTypes.node,
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="page" component={Page} />
            <Route path="redux-example" component={ReduxExample} />
            <Route path="github-search" component={GithubSearch} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default App;
