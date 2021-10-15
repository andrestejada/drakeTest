import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todosReducer";


export const rootReducers = combineReducers({
    auth: authReducer,
    todos:todoReducer
})