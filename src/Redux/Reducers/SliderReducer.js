import { SLIDER_FETCH} from "../Types/Types"
const initialState={
    error:"",
    SliderImg:[]
}
export default function SliderReducer(state=initialState,action){
switch (action.type) {
    case SLIDER_FETCH:
        let newState = {
            ...state,
            SliderImg: action.payload,
        }
        console.log("Reducer is working", newState);

        return newState;


    default:
       return state;
}
}