import React, {Component} from 'react';
import styles from './Counter.css';
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button className={styles.testbtn} onClick={() => {
        this.setState({count: this.state.count + 1});
      }}>
        Count: {this.state.count}
      </button>
    );
  }
}
export default Counter;