import { combineReducers } from "redux";
import languageReducer from "./languageSlice";

const appReducers = combineReducers({
    language: languageReducer,
});

export default appReducers;
