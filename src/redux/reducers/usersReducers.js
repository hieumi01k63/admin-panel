import ActionType from "../constant/actionType";

const initState = {
  users: [],
};

export const newUsersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_NEW_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};
