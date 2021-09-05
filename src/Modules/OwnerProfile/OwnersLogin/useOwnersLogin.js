import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { LoginAction } from "../../../Redux/Actions/LoginAction"
import toast, { Toaster } from 'react-hot-toast';
export default function useOwnersLogin() {
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [message, setmessage] = useState("")


    const history = useHistory();
    const dispatch = useDispatch()
   
    const ctaLogin = () => {
        if (Email !== "" || password !== "") {
            dispatch(LoginAction(Email, password,toast))
            history.push("/OwnersProfile")
            console.log(history);
            toast.success('Successfully toasted!')
            setmessage(
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                />)

        }
        else {
            setError()
        }
    }
    return [Email, password, setEmail, setPassword, ctaLogin, error, message]
}
