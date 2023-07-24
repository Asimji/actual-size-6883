import { GETPRODUCTS, GET_REQUEST, PRODUCT_FAILURE } from "./actionTypes"
import axios from "axios"
export const getProducts=(params)=>(dispatch)=>{
    dispatch({type:GET_REQUEST})
      axios.get(`${process.env.REACT_APP_URL}/product`,params).then((res)=>{dispatch({type:GETPRODUCTS,payload:res.data.products})}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
   
    }
