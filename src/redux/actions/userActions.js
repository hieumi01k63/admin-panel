import ActionType from "../constant/actionType";

export const setNewUsers = (users) => {
  return {
    type: ActionType.SET_NEW_USERS,
    payload: users,
  };
};
