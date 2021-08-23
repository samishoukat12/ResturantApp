import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SliderAction } from '../../../Redux/Actions/SliderAction'
import {useSelector} from "react-redux"

export  function useSlider() {
   const[Loading,setLoading]=useState(false)
   const SliderImage = useSelector(state =>state.SliderReducer.SliderImg)
   console.log("resturents",SliderImage);
   const dispatch=useDispatch()
  
   useEffect(() => {
      dispatch(SliderAction(setLoading))
   }, [])

   return[Loading,SliderImage]
}
