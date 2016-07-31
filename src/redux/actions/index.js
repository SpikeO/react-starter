export const type = 'BOOK_SELECTED';

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type,
    payload: book
  };
}
