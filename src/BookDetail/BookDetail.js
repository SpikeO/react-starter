import React from 'react';
import { connect } from 'react-redux';

const BookDetail = (props) => {
  if (!props.book) {
    return <div>Select a book to get started.</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <div>Title: {props.book.title}</div>
      <div>Pages: {props.book.pages}</div>
    </div>
  );
};
BookDetail.propTypes = {
  book: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
