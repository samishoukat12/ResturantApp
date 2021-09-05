import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OwnersAction } from '../../../Redux/Actions/OwnersAction'

export function useOwnersAddResturent() {
    const [Title, setTitle] = useState("")
    const [Discount, setDiscount] = useState("")
    const [Description, setDescription] = useState("")

    const dispatch = useDispatch()
    const ctaResturentAdd = () => {
        if (Title !== "" || Discount !== "" || Description !== "") {
       let resturent={
           Title,
           Description,
           Discount
       }
            dispatch(OwnersAction(resturent))
            setTitle("")
            setDiscount("")
            setDescription("")

        }
    }
    return[ctaResturentAdd,Title,Description,Discount,setTitle,setDiscount,setDescription]

}
