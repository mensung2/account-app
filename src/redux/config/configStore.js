import { combineReducers, createStore } from "redux";
import accounts from "../modules/accounts";

const rootReducer = combineReducers({
  accounts,
});

const store = createStore(rootReducer);

export default store;
