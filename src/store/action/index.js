import * as ActionType from "../constants/actionType";
import { callAPI } from "../../utils/CallAPI";

export const actGetListNewsAPI = () => {
  return dispatch => {
    callAPI(
      "everything?q=news&apiKey=d228956628c24d5dbb82acab0bdf8a28",
      "GET",
      null,
      null
    )
      .then(result => {
        dispatch(actGetListNews(result.data.articles));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListNews = listNews => {
  return {
    type: ActionType.GET_LIST_NEWS,
    listNews
  };
};

export const actGetTopHeading = () => {
  return dispatch => {
    callAPI(
      "top-headlines?q=news&apiKey=d228956628c24d5dbb82acab0bdf8a28",
      "GET",
      null,
      null
    )
      .then(result => {
        dispatch(actGetListHeading(result.data.articles));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetListHeading = listHeading => {
  return {
    type: ActionType.GET_LIST_HEADING,
    listHeading
  };
};

export const actgetSelection = id => {
  return dispatch => {
    callAPI(
      `everything?q=${id}&apiKey=d228956628c24d5dbb82acab0bdf8a28`,
      "GET",
      null,
      null
    )
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_SELECTION,
          listSelection: result.data.articles
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
