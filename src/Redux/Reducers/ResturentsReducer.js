import {RESTURENTS_FETCH} from "../Types/Types"
const initialState={
    error:"",
    Resturents:[]
}
export default function ResturentReducer(state=initialState,action){
switch (action.type) {
    case RESTURENTS_FETCH:
        let newState = {
            ...state,
            Resturents: action.payload,
        }
        console.log("Reducer is working", newState);

        return newState;


    default:
       return state;
}
}