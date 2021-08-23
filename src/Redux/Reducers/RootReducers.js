import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer"
import ResturentReducer from "./ResturentsReducer"
import SliderReducer from "./SliderReducer"
const rootReducer = combineReducers({
    AuthReducer,
    ResturentReducer,
    SliderReducer
});
export default rootReducer;