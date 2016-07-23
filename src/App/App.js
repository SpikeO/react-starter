import React, {Component} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Page from '../Page/Page';

class Container extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">/</Link></li>
          <li><Link to="/page">Page</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const NotFound = () => (<h1>404.. This page is not found!</h1>);
const Home = () => (<h1>Hello from Home!</h1>);

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