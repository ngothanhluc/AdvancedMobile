import { combineReducers } from "redux";
import languageReducer from "./languageSlice";
import authReducer from "./authSlice";
const appReducers = combineReducers({
    language: languageReducer,
    auth: authReducer,
});

export default appReducers;
