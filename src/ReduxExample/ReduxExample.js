import React, {Component} from 'react';
import BookList from '../BookList/BookList';
import BookDetail from '../BookDetail/BookDetail';

class ReduxExample extends Component {

  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
export default ReduxExample;