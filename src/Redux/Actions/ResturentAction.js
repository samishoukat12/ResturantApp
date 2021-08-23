import {db} from "../../Config/Firebase"
import { RESTURENTS_FETCH } from "../Types/Types";


export  const ResturentsAction=(setLoading)=>async(dispatch)=>{
  try {
      setLoading(true)
    let fetchRes=await db.collection("Resturents").get();
    const productsArray=[];
    fetchRes.forEach(doc => {
       productsArray.push({docId:doc.id,...doc.data()});
       console.log("id",doc.id);
       console.log("res",fetchRes);
    });
   
    dispatch(
        {
            type:RESTURENTS_FETCH,
            payload:productsArray,
        }
    );
  } catch (error) {
      console.log(error);
      alert(error)
  }
  finally{
    setLoading(false)

  }
}