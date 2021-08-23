import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory} from "react-router-dom"
import {LoginAction} from "../../Redux/Actions/LoginAction"
export default function useLogin() {
   const [Email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [error,setError]=useState("")
   const history = useHistory();
   const dispatch=useDispatch()
   const ctaLogin=()=>{
    if(Email!==""|| password!==""){
        dispatch(LoginAction(Email,password))
        history.push("/HomePage")
        console.log(history);
    } 
    else{
        setError()
    }  
}
return[Email,password,setEmail,setPassword,ctaLogin,error]
}
