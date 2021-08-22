import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { doSignUpAction, LoginAction } from '../../Redux/Actions/LoginAction'
export default function UseSignUp() {
    const [UserName,setUsername]=useState("")
    const [Email,setEmail]=useState("")
    const [Phone,setPhone]=useState("")
    const [Country,setCountry]=useState("")
    const [City,setCity]=useState("")
    const [Password,setPassword]=useState("")
    const [error,setError]=useState("")
    const dispatch=useDispatch()
   const ctaSignUp=()=>{
    if(UserName!==""||Email!==""||Phone!==""||Country!==""||City!==""||Password!==""){
        let user={
        UserName,
        Email,
        Phone,
        Country,
        City,
        Password
        }
        dispatch(doSignUpAction(user))
        setUsername("")
        setEmail("")
        setPhone("")
        setCountry("")
        setCity("")
        setPassword("")

    }
    else{
        setError("error")
    }
   }
    return[UserName,Email,Phone,Country,City,Password,setUsername,setEmail,setPhone,setCountry,setCity,setPassword,ctaSignUp]
}
