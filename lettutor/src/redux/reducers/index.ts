import { combineReducers } from "redux";
import languageReducer from "./languageSlice";
import authReducer from "./authSlice";
import specialtyReducer from "./specialtySlice";
const appReducers = combineReducers({
    language: languageReducer,
    auth: authReducer,
    specialty: specialtyReducer,
});

export default appReducers;
