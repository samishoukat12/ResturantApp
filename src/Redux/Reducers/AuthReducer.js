 import {LOGIN} from "../Types/Types"
 
 const initialState={
    isUserLoggedIn:false,
    user:null,
}
export default function Login(state=initialState,action){
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                isUserLoggedIn:true,
                user:action.payload,
            }
           
    
        default: 
        return state
            
    }
} 