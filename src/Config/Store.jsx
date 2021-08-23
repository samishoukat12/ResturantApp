import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../Redux/Reducers/RootReducers"
const Store = createStore(RootReducer,applyMiddleware(thunk));
export default Store;


  