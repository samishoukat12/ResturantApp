import { db } from "../../Config/Firebase";
import { SLIDER_FETCH} from "../Types/Types";

export  const SliderAction=(setLoading)=>async(dispatch)=>{
    try {
        setLoading(true)
      let fetchRes=await db.collection("SliderOffers").get();
      const productsArray=[];
      fetchRes.forEach(doc => {
         productsArray.push({docId:doc.id,...doc.data()});
         console.log("id",doc.id);
         console.log("res",fetchRes);
      });
     
      dispatch(
          {
              type:SLIDER_FETCH,
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