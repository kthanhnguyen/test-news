import * as ActionType from "../constants/actionType";

let initialState = {
  listNews: [],
  listHeading: [],
  listSelection: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_NEWS:
      state.listNews = action.listNews;
      return { ...state };

    case ActionType.GET_LIST_HEADING:
      state.listHeading = action.listHeading;
      return { ...state };

    case ActionType.GET_LIST_SELECTION:
      state.listSelection = action.listSelection;
      return { ...state };

    default:
      return { ...state };
  }
};

export default newsReducer;
