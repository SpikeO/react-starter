import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBook from './ActiveBook';
import Counter from './Counter';
import GithubSearch from './GithubSearch';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  counter: Counter,
  githubsearch: GithubSearch,
});

export default rootReducer;
