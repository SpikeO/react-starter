import expect from 'expect'
import * as actions from '../src/redux/actions/index'

describe('actions', () => {
  it('action should set a new book', () => {
    const payload = {title: 'test', pages: 3};
    const expectedAction = {
      type: actions.type,
      payload
    };
    expect(actions.selectBook(payload)).toEqual(expectedAction);
  })
});
