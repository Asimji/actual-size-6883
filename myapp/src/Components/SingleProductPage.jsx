import React, { useEffect, useState } from 'react';
import "../styles/Singlepage.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

const SingleProductPage = () => {   


  const [product456,setproduct456]=useState({})
 

  const AuthToken=JSON.parse(localStorage.getItem("userShop")) || ""
  const handleCart=()=>{

 let obj={image,price,brand,title,description,quantity,category,rating}
 console.log(obj)
 fetch(`${process.env.REACT_APP_URL}/cart/create`,{
  method:"POST",
  headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer ${AuthToken}`
  },
  body:JSON.stringify(obj)
 }).then(res=>res.json()).then((res)=>{alert(res.msg)}).catch(e=>console.log(e))
}
 
  

  // function slideImage() {
  //   const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

  //   document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  // }

  // window.addEventListener('resize', slideImage);

  const val=useParams();
  useEffect(()=>{

  axios.get(`${process.env.REACT_APP_URL}/product/${val.id}`).then((res)=>{
    setproduct456(res.data.product)
  })
  },[val])

  console.log(product456,"products")
  const {brand,category,description,image,_id,price,quantity,rating,title}=product456;
  const old=price+50
  return (

    <Box mt={{base:0,md:'10vh'}} className="card-wrapper">

      <div className="card">

        <div style={{width:"60%"}} className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img  src={image} alt="shoe image" />
              <img src={image} alt="shoe image" />
              <img src={image} alt="shoe image" />
              <img src={image} alt="shoe image" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img src={image} alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img src={image} alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img src={image} alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src={image} alt="shoe image" />
              </a>
            </div>
          </div>
        </div>

        <div className="product-content">
          <h2 className="product-title">{brand}</h2>
          <a href="#" className="product-link">visit {brand} store</a>
          <div className="product-rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">Old Price: <span>${old}</span></p>
            <p className="new-price">New Price: <span>${price} </span></p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>{category}</p>
            <p>{description}</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>{quantity}</span></li>
              <li>Category: <span>{category}</span></li>
              <li>Shipping Area: <span>India</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div style={{ marginTop: "-2px" }} className="social-links">
            <p>  Select colors: </p>
            <a style={{ background: "red" }} href="#">
              <i className=""></i>
            </a>
            <a style={{ background: "blue" }} href="#">
              <i className=""></i>
            </a>
            <a style={{ background: "brown" }} href="#">
              <i className=""></i>
            </a>
            <a style={{ background: "black" }} href="#">
              <i className=""></i>
            </a>
            <a style={{ background: "pink" }} href="#">
              <i className=""></i>
            </a>
          </div>

          <div className="purchase-info">

            <span>Quantity: {"                               "}<input style={{ width: "125px", border: "2px solid black", fontWeight: "bolder" }} type="number" min="1" defaultValue={"1"} /></span>
            <br />
            <button style={{ width: "125px" }} type="button" className="btn"
            onClick={handleCart}
            >
             <Link>
               Add to Cart
             </Link>
            </button>

            <button style={{ width: "125px" }} type="button" className="btn">
              <Link to='/payment'>
              Buy Now {"    "}
              </Link>
               </button>
          </div>


        </div>
      </div>
    </Box>




  )
}

export default SingleProductPage