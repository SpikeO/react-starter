import React, {Component} from 'react';
const styles = require('./Page.scss');

class Page extends Component {

  render() {
    return (
      <div className={styles.divTest}>
        <button className={styles.testbtn}>
          Test123
        </button>
      </div>
    );
  }
}
export default Page;
