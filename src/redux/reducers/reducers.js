import { combineReducers } from "redux";
import { newUsersReducer } from "./usersReducers";
import { featuredInfoReducer } from "./featuredInfoReducers";

const reducers = combineReducers({
  newUsers: newUsersReducer,
  newFeaturedInfo: featuredInfoReducer,
});

export default reducers;
