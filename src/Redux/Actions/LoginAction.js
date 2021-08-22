import {auth,db} from "../../Config/Firebase"
import { LOGIN } from "../Types/Types";
export const LoginAction=(Email,Password)=>async(dispatch)=>{
try {
    let userCredentials=await auth.signInWithEmailAndPassword(Email,Password)
const users=userCredentials.user
console.log("users",users.uid);
dispatch({
    type:LOGIN,
    payload:users,
})
} catch (error) {
// alert(JSON.stringify)
}
}

export const doSignUpAction = (user) => async (dispatch) => {
    try {
        //FIREBASE LOGIN
        const userCredential = await auth.createUserWithEmailAndPassword(user.Email, user.Password);
        var userData = userCredential.user;
        // FIREBASE DATABASE
        await db.collection("users").add({
            ...user,
            uid: userData.uid
        })
        dispatch({
            type: LOGIN,
            payload: userData,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}