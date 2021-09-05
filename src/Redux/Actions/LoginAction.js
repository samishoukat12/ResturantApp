import {auth,db,storage,Firebase} from "../../Config/Firebase"
import { ALREADY_LOGIN, LOGIN,LOGOUT } from "../Types/Types";
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

export const doSignUpAction = (user,e, file, setFile, setURL,) => async (dispatch) => {
    try {
        //FIREBASE LOGIN
        const userCredential = await auth.createUserWithEmailAndPassword(user.Email, user.Password);
        var userData = userCredential.user;
        const ref = storage.ref(`/images/${file.name}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
          ref
            .getDownloadURL()
            .then((url) => {
              setFile(null);
              setURL(url);
              db.collection("users").add({
                  ...user,
                  image:url,
                   uid: userData.uid
                });
            });
        });
        // FIREBASE DATABASE
        dispatch({
            type: LOGIN,
            payload: userData,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}
export const alreadyLoginUser = (setLoading) => async (dispatch) => {
    try {
        const LoginUser = await Firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                var uid = user.uid;
                console.log("already", uid);
                dispatch({
                    payload: user,
                    type: ALREADY_LOGIN


                })
                setLoading(false)
            }
            else {
                setLoading(false)
            }
            // console.log("LoginUser", LoginUser);
        })
    } catch (error) {
        alert(JSON.stringify(error))
    }

}
export const doLogout = () => async (dispatch) => {
    try {
        const res = await auth.signOut();
        console.log("user", res);
        dispatch({
            type: LOGOUT,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}