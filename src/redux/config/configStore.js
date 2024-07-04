import { combineReducers, createStore } from "redux";
import accounts from "../modules/accounts";

const rootReducer = combineReducers({
  accounts,
});

export default store;
