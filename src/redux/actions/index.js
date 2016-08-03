export const BOOK_SELECTED = 'BOOK_SELECTED';
export const COUNTER_INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const COUNTER_DECREMENT = 'DECREMENT';
export const COUNTER_INCREMENT = 'INCREMENT';


const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const GITHUB_SEARCH = 'GITHUB_SEARCH';


export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
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


export function navigateGithub(inputValue) {
  return {
    type: GITHUB_SEARCH,
    fullName: inputValue
  };
}

function action(type, payload = {}) {
  return { type, ...payload }
}


function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const accc = acc;
    accc[type] = `${base}_${type}`;
    return accc
  }, {})
}


export const REPO = createRequestTypes('REPO');

export const repo = {
  request: fullName => action(REPO.REQUEST, { fullName }),
  success: (fullName, response) => action(REPO.SUCCESS, { fullName, response }),
  failure: (fullName, error) => action(REPO.FAILURE, { fullName, error }),
};
