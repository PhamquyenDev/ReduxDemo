import MoviesReducer from "./Movies";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    Movies: MoviesReducer,
})

export default RootReducer;