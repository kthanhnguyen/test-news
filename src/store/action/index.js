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
