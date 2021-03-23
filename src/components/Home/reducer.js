const initialState = { data: [] };
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_DATA":
      console.log(action.data);
      return { ...state, data: action.data.results };
    default:
      return state;
  }
}
