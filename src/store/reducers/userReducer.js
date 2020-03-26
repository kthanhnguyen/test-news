import * as ActionType from "../constants/actionType";

let data = JSON.parse(localStorage.getItem("userData"));
let initialState = {
  userData: data ? data : ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ACT_REGISTER_USER:
      state.userData = action.userData;
      return { ...state };

    case ActionType.ACT_LOGOUT_USER:
      state.userData = "";
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
