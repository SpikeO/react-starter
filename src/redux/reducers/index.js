import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBook from './ActiveBook';
import Counter from './Counter';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  counter: Counter
});

export default rootReducer;
