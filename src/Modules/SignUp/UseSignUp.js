import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { doSignUpAction } from '../../Redux/Actions/LoginAction'
import { useHistory } from 'react-router'
import toast, { Toaster } from 'react-hot-toast';

export default function UseSignUp() {
    const [UserName,setUsername]=useState("")
    const [Email,setEmail]=useState("")
    const [Phone,setPhone]=useState("")
    const [Country,setCountry]=useState("")
    const [City,setCity]=useState("")
    const [Password,setPassword]=useState("")
    const [error,setError]=useState(null)
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const dispatch=useDispatch()
const history=useHistory()
function handleChange(e) {
    setFile(e.target.files[0]);
  }
   const ctaSignUp=(e)=>{

    if(UserName!==""||Email!==""||Phone!==""||Country!==""||City!==""||Password!==""){
        let user={
        UserName,
        Email,
        Phone,
        Country,
        City,
        Password
        }
        dispatch(doSignUpAction(user,e, file, setFile, setURL))
                    history.push("/login")
                    setUsername("")
                    setEmail("")
                    setPhone("")
                    setCountry("")
                    setCity("")
                    setPassword("")
                    setFile("")
    }
    else if(UserName===""){
        setError("fileds is empty")
    }
    else{
        
    }
        
   }
    return[UserName,Email,Phone,Country,City,Password,error,setUsername,setEmail,setPhone,setCountry,setCity,setPassword,handleChange,ctaSignUp]
}
