import { createStore } from "redux";
import RootReducer from "./reducers/rootReducers";

const store = createStore(RootReducer);
export default store;