import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup, Flex, Spacer, Center } from '@chakra-ui/react'
import styles from "../styles/ProductCard.module.css"
import React, { memo, useState } from 'react'
import star from "../images/star.png"
import { Link } from 'react-router-dom'
const ProductCard = ({ image, price, brand, title, _id,description,quantity,category,rating }) => {
    console.log("invoke", _id)
const AuthToken=JSON.parse(localStorage.getItem("userShop")) || ""
    const handleCart=()=>{
   let obj={image,price,brand,title,description,quantity,category,rating}
   console.log(obj)
   fetch(`https://fair-tan-indri-ring.cyclic.app/cart/create`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${AuthToken}`
    },
    body:JSON.stringify(obj)
   }).then(res=>res.json()).then((res)=>{alert(res.msg)}).catch(e=>console.log(e))
}

    return (
        <div style={{ margin: "50px" }}>
            <Card maxW='sm' >
                <CardBody>
                    <Link >
                        <Image
                            src={image[0]}
                            alt='Gaming Headphone'
                            borderRadius='lg'
                            w="100px" h="100px"
                        />

                    </Link>
                    
                    <Stack mt='6' spacing='3' className={styles.title}>
                        <Flex alignItems={'center'}>
                            <Heading size='md'>{brand}</Heading>
                            <Spacer />
                            <Text
                                color='black.800' fontSize='2xl'>
                                ${price}
                            </Text>
                        </Flex>
                        <Text fontSize='10px' as='sub'>
                            {title}
                        </Text>
                        <Flex gap={"10px"} alignItems={"center"}>
                            <img className={styles.stars} src={star} alt="5star" />
                            <Text>(121)</Text>
                        </Flex>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button style={{ borderRadius: "30px", padding: "20px 15px", backgroundColor: "#003d29", color: "white" }} colorScheme="teal"
                            variant='outline'
                            onClick={handleCart}
                            >
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}
// const MemoizedProductCard=memo(ProductCard)
// export default MemoizedProductCard
export default ProductCard