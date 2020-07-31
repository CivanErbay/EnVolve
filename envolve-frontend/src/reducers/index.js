import UserReducer from "./UserReducer";
import {combineReducers} from "redux";

 const allReducers = combineReducers({
    loggedUser : UserReducer,
})

export default allReducers