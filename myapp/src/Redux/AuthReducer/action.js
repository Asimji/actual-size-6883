import { GETPRODUCTS, GET_REQUEST, PRODUCT_FAILURE } from "./actionTypes"
import axios from "axios"
export const getProducts=()=>{
    // console.log(totalButtons)
    return async(dispatch)=>{
        dispatch({type:GET_REQUEST})
        let res=await axios.get(`https://fair-tan-indri-ring.cyclic.app/product`)
        console.log(res)
        dispatch({type:GETPRODUCTS,payload:res.data})
        dispatch({type:PRODUCT_FAILURE})
    }
}