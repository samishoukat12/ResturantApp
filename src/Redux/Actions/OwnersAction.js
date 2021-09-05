import { db } from "../../Config/Firebase"
import { OWNER_ADD } from "../Types/Types"

export const OwnersAction =(resturent)=>async(dispatch)=>{
 try {
    let Resturents=await db.collection("Resturents").add({
        title:resturent.Title,
        descrition:resturent.Description,
        discount:resturent.Discount
    })
     dispatch({
         type:OWNER_ADD,
         payload:Resturents
     })
 } catch (error) {
  alert(JSON.stringify)   
 }
}