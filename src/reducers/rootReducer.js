const initialState = {
  beers: [],
  searchText: '',
  isFetching: false,
}

const rootReducer = (state = initialState, action) => {
  const actions = {
    UPDATE_SEARCH_TEXT: () => ({
      ...state,
      searchText: action.text,
    }),
    ORDER_BEERS: () => ({
      ...state,
      isFetching: true,
    }),
    RECEIVE_BEERS: () => ({
      ...state,
      
      isFetching: false,
      beers: action.beers
    }),
    default: () => state,
  }

  return (actions[action.type] || actions.default)()
}

export default rootReducer