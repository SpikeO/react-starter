import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import Page from '../Page/Page';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

class Container extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">/</Link></li>
          <li><Link to="/page">Page</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
Container.propTypes = {
  children: React.PropTypes.node,
};

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home}/>
          <Route path="page" component={Page}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
