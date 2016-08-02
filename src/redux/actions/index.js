export const type = 'BOOK_SELECTED';
export const COUNTER_INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const COUNTER_DECREMENT = 'DECREMENT';
export const COUNTER_INCREMENT = 'INCREMENT';

export function selectBook(book) {
  return {
    type,
    payload: book
  };
}

export function incrementCounter() {
  return {
    type: COUNTER_INCREMENT
  };
}
export function decrementCounter() {
  return {
    type: COUNTER_DECREMENT
  };
}

export function incrementAsyncAction() {
  return {
    type: COUNTER_INCREMENT_ASYNC
  };
}
