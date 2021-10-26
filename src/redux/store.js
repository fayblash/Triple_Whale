import { createStore, applyMiddleware } from "redux";
import ordersReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(ordersReducer, applyMiddleware(thunk));

export default store;
