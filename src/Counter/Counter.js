import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

@connect(
  state => ({ counter: state.counter }),
  {
    onIncrement: actions.incrementCounter,
    onDecrement: actions.decrementCounter,
    onIncrementAsync: actions.incrementAsyncAction,
  }
)
class Counter extends Component {

  render() {
    return (
      <p>
        Clicked: {this.props.counter} times
        {' '}
        <button onClick={this.props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.props.onIncrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onIncrementAsync: PropTypes.func,
};

export default Counter;
