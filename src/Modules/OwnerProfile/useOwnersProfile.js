import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ResturentsAction } from '../../Redux/Actions/ResturentAction'
import {useSelector} from "react-redux"

export  function useOwnersProfile() {
   const[Loading,setLoading]=useState(false)
   const Resturents = useSelector(state =>state.ResturentReducer.Resturents)
   console.log("resturents",Resturents);
   const dispatch=useDispatch()
  
   useEffect(() => {
      dispatch(ResturentsAction(setLoading))
   }, [])
   const handleLoading=()=>{
    setLoading()
}
   return[Loading,Resturents,handleLoading]
}
