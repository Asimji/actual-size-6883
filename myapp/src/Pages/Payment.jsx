import { Button, useToast,Card , Flex, Grid, Heading, Image, Radio,Box,Text,FormControl,Input,Stack,FormLabel,RadioGroup,FormHelperText,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody, 
  PopoverArrow,
  PopoverCloseButton,
 
} from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import logo1 from "../images/mastercard.png"
import logo2 from "../images/amazon.png"
import logo3 from "../images/applepay.png"
import logo4 from "../images/googlepay.png"
import { isDisabled } from '@testing-library/user-event/dist/utils'
import styles from "../styles/payment.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const initState={
  firstName:'',
  lastName:'',
  homeAddress:'',
  city:'',
  postalCode:"",
  phoneNo:"",
  email:''
}

const Payment = () => {
  const AuthToken=JSON.parse(localStorage.getItem("userShop")) || ""


    const toast = useToast()

    const [address,setAddress]=useState(initState)

    const [data,setData]=useState([])

    const [state,setState]=useState('')
    const [cart,setCart]=useState([])

    const handleSubmit=()=>{
 
 console.log("Hello")
 
  setData([...data,address]);
  setAddress(initState)
    }
    
  useEffect(()=>{
  axios.get(`https://fair-tan-indri-ring.cyclic.app/cart`,{
 headers:{
  Authorization:`Bearer ${AuthToken}`
 }
  }).then((res)=>{setCart(res.data.cart);console.log(res)}).catch(e=>console.log(e))
  },[])

  let totalAmount=0;
for(let i=0;i<cart?.length;i++){
  totalAmount+=cart[i].price * cart[i].quantity
}
let taxAmount=Math.floor(totalAmount*0.1)

const handleAdd=(id,quantity)=>{
  const val=quantity+1
   fetch(`https://fair-tan-indri-ring.cyclic.app/cart/update/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      Authorization : `Bearer ${AuthToken}`
    },
    body:JSON.stringify({quantity:val})
   }).then(res=>res.json()).then((res)=>{window.location.reload()}).catch(e=>console.log(e))

}
const handleSubtract=(id,quantity)=>{
  const val=quantity-1
  fetch(`https://fair-tan-indri-ring.cyclic.app/cart/update/${id}`,{
   method:"PATCH",
   headers:{
     "Content-Type":"application/json",
     Authorization : `Bearer ${AuthToken}`
   },
   body:JSON.stringify({quantity:val})
  }).then(res=>res.json()).then((res)=>{window.location.reload()}).catch(e=>console.log(e))

}

  return (
    
    <Box m={"20px 40px 50px 50px"} flex-wrap=' wrap'>
<Link to={'/'}>
  <Text mb={15}>Home / <span style={{fontWeight:"bold"}}>Checkout</span> </Text>
</Link>

      <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={50} mt={19}>
     
     <Box className="Left" >
        <Box border={'1px solid gray'} borderRadius={10} p={"15"}>
            <Heading size={{xl:'md',lg:'md',base:'sm'}}>Review Item And Shipping</Heading>
            {cart?.map((item,i)=>{
     return  <Flex justify={'space-between'} align={'center'} mt={6} mb={25} flexDirection={{xl:'row',lg:'row',base:'column'}}>

      <Flex align={'center'} gap={10} flexDirection={{xl:'row',lg:'row',base:'column'}}>


      <Box  w={'100px'} bg='blue.300' borderRadius={'12px'}>
      <Image src={item.image}/>
      </Box>
      <Box>
      <Heading size={{xl:'md',lg:'md',base:'sm'}}>{item.brand}</Heading>
      <Text  mt={2} fontSize={'2vh'} color={'blue'}>{item.title}</Text>
      </Box>
      </Flex>

      <Box textAlign={'right'}>
          <Heading size={{xl:'md',lg:'md',base:'sm'}} mr={5}>$ {item.price * item.quantity}</Heading>
          <Flex align={'center'} mt={'2vh'} gap={'2vh'}>
            <Button onClick={()=>handleAdd(item._id,item.quantity)}>+</Button>
          <Text fontWeight={'bold'}  size={{xl:'md',lg:'md',base:'sm'}} >{item.quantity}</Text>
            <Button onClick={()=>handleSubtract(item._id,item.quantity)}>-</Button>
          </Flex>
      </Box>

   </Flex>
  })}
       
        </Box>
        <Radio m={"15px 0 15px 0"}>Returning Customer?</Radio>
        <Box border={'1px solid gray'}  borderRadius={10} p={"25"}>
         
            <Flex justify={'space-between'} mb={8} flexDirection={{xl:'row',lg:'row',base:'column'}}
            
            >
                <Heading size={{xl:'lg',lg:'lg',base:'sm'}}>Delivery Information</Heading>
                <Popover>
  <PopoverTrigger>
  <Button w={{base:'200px'}} mt={{xl:0,lg:0,base:10}} size={{xl:'lg',lg:'lg',base:'sm'}}
                onClick={handleSubmit}
                >Save Information</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody color={'#003D29'} >Data Added Successfully!</PopoverBody>
  </PopoverContent>
</Popover>
             
            </Flex>


               

            <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={5}>

       
            <FormControl>
       <FormLabel>First Name*</FormLabel>

       <Input type='text' value={address.firstName} placeholder='Type here....'  onChange={(e)=>setAddress({...address,firstName:e.target.value})} />
          </FormControl>
            <FormControl>
       <FormLabel>Last Name</FormLabel>
       <Input type='text' value={address.lastName} placeholder='Type here....' onChange={(e)=>setAddress({...address,lastName:e.target.value})} />
        </FormControl>
            </Grid>
               
            <FormControl mt={5}>
  <FormLabel>Address</FormLabel>
  <Input type='text' value={address.homeAddress}  placeholder='Type here....' onChange={(e)=>setAddress({...address,homeAddress:e.target.value})}  />
 
</FormControl>
 
<Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={5} mt={5}>
                    
                    <FormControl>
               <FormLabel>City/Town</FormLabel>
               <Input type='text' value={address.city}  placeholder='Type here....' onChange={(e)=>setAddress({...address,city:e.target.value})} />
                </FormControl>
                    <FormControl>
               <FormLabel>ZipCode</FormLabel>
               <Input type='number' value={address.postalCode}  placeholder='Type here....' onChange={(e)=>setAddress({...address,postalCode:+(e.target.value)})} />
                </FormControl>
                    </Grid>
 
<Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}}gap={5} mt={5}>
                    
                    <FormControl>
               <FormLabel>Mobile</FormLabel>
               <Input type='number' value={address.phoneNo} placeholder='Type here....' onChange={(e)=>setAddress({...address,phoneNo:+e.target.value})}  />
                </FormControl>
                    <FormControl>
               <FormLabel>Email</FormLabel>
               <Input type='email' value={address.email} placeholder='Type here....' onChange={(e)=>setAddress({...address,email:e.target.value})}  />
               <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                    </Grid>

            

        </Box>
     
       
        {data.length>0 && data.map((item)=>{
          return <Card border='1px solid gray' h={200} w={300} mt={5} borderRadius={10} align={'left'} p={3}  >
            <Heading size={'sm'}>Name: {item.firstName}  {item.lastName}</Heading>
            <Text>Address: {item.homeAddress}</Text>
            <Text>Phone No: {item.phoneNo}</Text>
            <Button p={1} w={220} color={'red'} onClick={()=>setData([])}>Delete</Button>
            </Card>
        })}
      
     
     </Box>


     <Box className="right" border={'1px solid gray'} borderRadius={10}  p={"20px 20px 0 30px"} flex-wrap=' wrap' >
          <Heading mb={10}>Order Summary</Heading>    
          <Input mb={10} placeholder='Enter Coupon Code'  />
            
        
            <Button mb={5} borderLeft={'none'} borderRight={'none'} onClick={isDisabled} >Payment Details</Button>

            <RadioGroup defaultChecked='4'>
            <Stack mb={5} direction={'column'}>
  <Radio value={'1'} colorScheme='green' onChange={(e)=>setState(e.target.value)}  >
    Cash on delivery
  </Radio>
  <Radio  value='2' colorScheme='green' onChange={(e)=>setState(e.target.value)} >
   Shopcart Card
  </Radio>
  <Radio  value='3' colorScheme='green' onChange={(e)=>setState(e.target.value)} >
    Paypal
  </Radio>
  <Radio  value='4' colorScheme='green' onChange={(e)=>setState(e.target.value)}   >
    Credit or Debit Card
  </Radio>
</Stack>  
            </RadioGroup>
            <Grid templateColumns={{xl:'repeat(4, 1fr)',lg:'repeat(4, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(1, 1fr)',base:'repeat(1, 1fr)'}} gap={3} mb={10} mt={5} w={{xl:"60%",lg:"60%",base:"30%"}} ml={2}
       cursor={'pointer'} >
         
         <Box bg='#edf2f7'  borderRadius={'5px'} p={2}>
        
     <Image src={logo1} alt="logo"   w={{xl:"100%",lg:"100%",base:"50%"}} h={6} mt={1}/>

    
        </Box>
   
   

        <Box bg='#edf2f7'  borderRadius={'5px'} p={2}>
        
     <Image src={logo2} alt="logo"  w={{xl:"70%",lg:"70%",base:"60%"}} h={5} mt={2} ml={1}/>
    
        </Box>
   
  
   
      
        <Box bg='#edf2f7'  borderRadius={'5px'} p={2} >
        
     <Image src={logo3} alt="logo"  w={{xl:"80%",lg:"80%",base:"60%"}} h={5} mt={1}/>
     
        </Box>
   
   
        <Box bg='#edf2f7'  borderRadius={'5px'} p={2}>
         
     <Image src={logo4} alt="logo"  w={{xl:"80%",lg:"80%",base:"60%"}} h={5} mt={1}/>
         
        </Box>
   
   
</Grid> 
{state==='1'?"": 

<form required>
        
<FormControl mt={5} isRequired>
  <FormLabel>Email </FormLabel>
  <Input type='email' placeholder='Type here....' border={'1px solid black'} />
</FormControl>
<FormControl mt={5} isRequired>
  <FormLabel>Card Holder Name</FormLabel>
  <Input type='text' placeholder='Type here....' />
</FormControl>
<FormControl mt={5} isRequired>
  <FormLabel>Card Number</FormLabel>
  <Input type='number' placeholder=' 0000******1245'/>
 
</FormControl>

<Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={5} mt={5}>
                    
                    <FormControl isRequired>
               <FormLabel>Expiry</FormLabel>
               <Input type='date'  />
                </FormControl>
                    <FormControl isRequired>
               <FormLabel>CVC</FormLabel>
               <Input type='text' placeholder='000' />
                </FormControl>
                    </Grid>

                    </form>
}
<Box mt={10} p={10} fontWeight={'bold'}>
<Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} mt={5}>
    <Text>Sub Total</Text>
    <Text>${totalAmount}</Text>
</Flex>
<Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} >
    <Text>Tax(10%)</Text>
    <Text>${taxAmount}</Text>
</Flex>
<Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} >
    <Text>Coupon Discount</Text>
    <Text>-$54.90</Text>
</Flex>
<Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} >
    <Text>Shipping Cost</Text>
    <Text>-$0.00</Text>
</Flex>
<Box borderBottom={'1px solid gray'}  ></Box>
<Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} mt={5}>
    <Text>Total</Text>
    <Text>=${Math.floor(totalAmount + taxAmount - 54.90)}</Text>
</Flex>

</Box>

<Button
onClick={() =>
  {data.length<=0?   toast({
    title: 'Error!!!',
    description: " Address is Missing ",
    position:'bottom',
    status: 'error',
    duration: 9000,
    isClosable: true, }):
    toast({
      title: 'Payment Successfull',
      description: "Order Placed!!  Thank You for Shopping & Come Again!! ",
      position:'top',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  }
bg={"#003D29"} color={'white'} ml={5} mb={10} w={{xl:500,lg:500,base:100}} borderRadius={25}
>{state==='1'?"Order":"Pay"} $494.10</Button>




     </Box>

     </Grid>



    </Box>

  )
}

export default memo(Payment)
