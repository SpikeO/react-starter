import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
const styles = require('./BookList.scss');

@connect(
state => ({ books: state.books }),
{ selectBook: actions.selectBook })
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className={styles.listgroupitem}
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
BookList.propTypes = {
  books: PropTypes.array,
  selectBook: PropTypes.func
};
BookList.defaultProps = {
  books: [],
  selectBook: () => {
  }
};

export default BookList;
