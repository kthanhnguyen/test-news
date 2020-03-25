import * as ActionType from "../constants/actionType";

let data = JSON.parse(localStorage.getItem("userData"));
let initialState = {
  userData: data ? data : {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default userReducer;
