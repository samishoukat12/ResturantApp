import { OWNER_ADD } from "../Types/Types";

const initialState={
    Resturents:[]
}



export default function OwnersAddReducer(state=initialState,action) {
  switch (action.type) {
      case OWNER_ADD:
        let newState = state.todoTask
        newState.push(action.payload)
        return {
            ...state,
            Resturents: newState,

        }
  
      default:return state
    }
}
