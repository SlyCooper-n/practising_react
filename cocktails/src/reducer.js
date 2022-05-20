export function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "CHANGE_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "DISPLAY_COCKTAILS":
      return {
        ...state,
        loading: false,
        cocktails: action.payload,
      };

    case "ERROR_NOT_FOUND":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      throw new Error("No such type in the reducer function");
  }
}
