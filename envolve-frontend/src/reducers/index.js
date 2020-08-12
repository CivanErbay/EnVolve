import UserReducer from "./UserReducer";
import {combineReducers} from "redux";
import SchoolClassReducer from "./SchoolClassReducer";

const allReducers = combineReducers({
    loggedUser: UserReducer,
    schoolClassesData: SchoolClassReducer,
})

export default allReducers