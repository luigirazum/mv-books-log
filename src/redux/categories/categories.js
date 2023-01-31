/**
 * action types for CATEGORIES
 */
const CHECK_STATUS = 'bookslog/categories/CHECK_STATUS';

/**
 * reducer for CATEGORIES
 */
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
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
