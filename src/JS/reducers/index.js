import { combineReducers } from "redux";
import counterReducer from "./counterReducer";


const rootreducer = combineReducers({
    counterReducer,
})


export default rootreducer