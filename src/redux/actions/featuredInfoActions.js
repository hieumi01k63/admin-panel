import ActionType from "../constant/actionType";

export const setFeaturedInfo = (info) => {
  return {
    type: ActionType.SET_FEATURED_INFO,
    payload: info,
  };
};
