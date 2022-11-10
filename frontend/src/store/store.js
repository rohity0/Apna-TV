import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";


const rootReducer = combineReducers({
  auth: authReducer
});
const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSe__ || compose;
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
