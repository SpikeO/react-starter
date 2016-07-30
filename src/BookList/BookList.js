import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectBook from '../redux/actions/index';
import styles from './BookList.scss';

@connect(
  state => ({books: state.books}),
  {selectBook})
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book) }
          className={styles.listgroupitem}>
          { book.title }
        </li>
      );
    });
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
  books: React.PropTypes.array,
  selectBook: React.PropTypes.func
};
BookList.defaultProps = {
  books: [],
  selectBook: () => {}
};

export default BookList;
