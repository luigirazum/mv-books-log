/**
 * action types for CATEGORIES
 */
const CHECK_STATUS = 'bookslog/categories/CHECK_STATUS';

/**
 * initialState for CATEGORIES
 */
const initialState = [];

/**
 * reducer for CATEGORIES
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ('Under construction...');
    default:
      return state;
  }
};

/**
 * action creators for CATEGORIES
 */
const checkStatus = () => ({ type: CHECK_STATUS });

export { checkStatus };
export default reducer;
