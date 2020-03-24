import * as ActionType from "../constants/actionType";

let initialState = {
  listNews: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_NEWS:
      state.listNews = action.listNews;

      return { ...state };

    default:
      return { ...state };
  }
};

export default newsReducer;
