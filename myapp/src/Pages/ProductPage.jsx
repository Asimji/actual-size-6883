import { Box, Button,Grid,Heading,Image } from "@chakra-ui/react"
import ProductCard from "../Components/ProductCard"
import { memo, useEffect, useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from "../Redux/AuthReducer/action"
import { useLocation, useSearchParams } from "react-router-dom"
import Pagination from "./Pagination"
import FilterPage from "./FilterPage"
const ProductPage=()=>{
    const[ searchParam,setSearchParam]=useSearchParams()
    const initPage=searchParam.get("page")
    const initlimit=searchParam.get("limit")
    const[page,setPage]=useState(initPage||1)
const location=useLocation()
    // console.log(searchParam)
    const limit=initlimit||6;

    let obj={
        params: {
            page:searchParam.get("page"),
            limit:searchParam.get("limit"),
          category: searchParam.get("category"),
          q:searchParam.get("q"),
          sortBy:searchParam.get("order")&&"price",
          sortOrder:searchParam.get("order")
        }
      }

    const dispatch=useDispatch()
    const store=useSelector((state)=>state.AuthReducer)
    const {productData}=store;
   
    useEffect(()=>{
        dispatch(getProducts(obj))
    },[location.search])

    const handlePage=(val)=>{
        setPage(val)
    }

    return<Box>
      
    <Box   >

    <Box position="relative" h={'500px'}  >
  <Image w="100%" src="https://w0.peakpx.com/wallpaper/480/705/HD-wallpaper-enchanted-by-the-music-girl-model-music-headphones-white-woman-pink.jpg" h='100%' />
    </Box >
    <Box position={{xl:"absolute",lg:"absolute",base:'unset'}} top={150} right={100}  w={{xl:'600px',lg:'513px',base:'wrap'}} h={{xl:'400px',lg:'481.78px',base:'200px'}}  p={{xl:"65px 84px",lg:"75px 64px",base:0}}  m={{base:'10px 0 10px 0',xl:0,lg:0}}  >

        <Box h='100%'  color={'#003D29'}  fontWeight={'bold'} >
            <Heading mt={5} fontSize={"35px"} >Grap Upto 50% Off On <br /> Selected Headphones</Heading>
            <Button color={'white'} border={'1px solid white'} bg={'#003D29'} 
            w={"25%"} borderRadius={'20px'} p={5} mt={10}
            >Learn More</Button>
        </Box>
    </Box>
</Box>
  <Box  >
    <FilterPage page={page} limit={limit}/>
  </Box>

    <Grid templateColumns={{xl:'repeat(3, 1fr)' ,lg:'repeat(3, 1fr)' ,base:'repeat(1, 1fr)' }}  >
        {productData?.map(({image,price,brand,title,_id,description,quantity,category,rating})=><ProductCard key={_id} _id={_id} title={title.substring(0,50)} price={price} brand={brand} image={image} 
        description={description} quantity={quantity} category={category} rating={rating}
        />)}
    </Grid>
    <Box >
        <Pagination handlePage={handlePage}/>
        </Box>
    
    </Box>
}
export  default memo(ProductPage)