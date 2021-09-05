 import {ALREADY_LOGIN, LOGIN,LOGOUT} from "../Types/Types"
 
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
            case ALREADY_LOGIN:
                return{
                    ...state,
                    isUserLoggedIn:true,
                    users:action.payload
                }
                case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
                users: null
            }
           
    
        default: 
        return state
            
    }
} 