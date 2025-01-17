import React from 'react'
import "../styles/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../images/ShopCart.png"


import { MdShoppingCartCheckout } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { ImSearch } from "react-icons/im";


const Navbar = () => {

    const AuthToken=JSON.parse(localStorage.getItem("userShop")) || ""

    const navigate=useNavigate()

    return <div className="nav_up" >
        <div id="navbar" >



            <div className="parent-box-1" >


                <div className="logo_div">
                    <Link to="/"> <img  id="logo" src={logo} alt='logo' /></Link>
                </div>

                <div className="menu_div " >

                    <div id="main_div">
                        <Link id="button" to="/productpage"  >Categories</Link>
                        <div id="asim1">
                            <div id="b">
                                <div className="div" id="d1">
                                    <h5 className="h5"><Link to="/productpage">Furniture</Link></h5>
                                    <ul>
                                        <li><Link to="/productpage">T-shirts</Link></li>
                                        <li><Link to="/productpage">Casual Shirts</Link></li>
                                        <li><Link to="/productpage">Formal Shirts</Link></li>
                                        <li><Link to="/productpage">Sweatshirts</Link></li>
                                        <li><Link to="/productpage">Sweaters</Link></li>
                                        <li><Link to="/productpage">Jackets</Link></li>
                                        <li><Link to="/productpage">Blazers & Coats</Link></li>
                                        <li><Link to="/productpage">Suits</Link></li>
                                        <li><Link to="/productpage">Rain Jackets</Link></li>

                                    </ul>
                                </div>
                                <div id="d2">
                                    <h5 className="h5"><Link to="/productpage">HandBag</Link></h5>
                                    <ul>
                                        <li><Link to="/productpage">Kurtas & Kurta Sets</Link></li>
                                        <li><Link to="/productpage">Sherwanis</Link></li>
                                        <li><Link to="/productpage">Nehru Jackets</Link></li>
                                        <li><Link to="/productpage">Dhotis</Link></li>
                                    </ul>
                                </div>

                                <div id="d3">
                                    <h5 className="h5"><Link to="/productpage">Shoes</Link></h5>
                                    <ul>
                                        <li><Link to="/productpage">Jeans</Link></li>
                                        <li><Link to="/productpage">Causal Trousers</Link></li>
                                        <li><Link to="/productpage">Formal Trousers</Link></li>
                                        <li><Link to="/productpage">Sports</Link></li>
                                        <li><Link to="/productpage">Track Pants & joggers</Link></li>
                                    </ul>

                                </div>
                                <div id="d4">
                                    <h5 className="h5"><Link to="/productpage"></Link>Headphones</h5>
                                    <ul>
                                        <li><Link to="/productpage">Briefs & Trunks</Link></li>
                                        <li><Link to="/productpage">Boxers</Link></li>
                                        <li><Link to="/productpage">Vests</Link></li>
                                        <li><Link to="/productpage">Sleepwear & Loungewear</Link></li>
                                        <li><Link to="/productpage">Thermals</Link></li>
                                    </ul>
                                    <h5 className="h5"><Link to="/productpage"></Link></h5>

                                </div>


                                <div id="d5">
                                    <h5 className="h5"><Link to="/productpage">Laptop</Link></h5>
                                    <ul>
                                        <li><Link to="/productpage">Casual Shoes</Link></li>
                                        <li><Link to="/productpage">Sports Shoes</Link></li>
                                        <li><Link to="/productpage">Formal Shoes</Link></li>
                                        <li><Link to="/productpage">Sneakers</Link></li>
                                        <li><Link to="/productpage">Sandals & Floaters</Link></li>
                                        <li><Link to="/productpage">Flip Flops</Link></li>
                                        <li><Link to="/productpage">Socks</Link></li>
                                    </ul>

                                </div>
                                <div id="d6">
                                    <h5 className="h5"><Link to="/productpage">Books</Link></h5>

                                </div>

                            </div>
                        </div>

                    </div>





                    <div id="main_div" className='del'>
                        <Link id="button" to="/productpage" >Deals</Link>

                    </div>






                    <div id="main_div" className='del'>
                        <Link id="button" to="/productpage" >What's New</Link>

                    </div>



                    <div id="main_div" className='del' >
                        <Link id="button" to="/productpage" >Delivery</Link>

                    </div>



                </div>


            </div>
            {/* Dropdown for media query */}



            {/* end here */}

            {/* <!-- parent-box-1 end --> */}

            {/* <!-- search part here  --> */}

            <div className="parent-box-2" >

                <div className="div1" >


                    <input type="text" name="" id="search" placeholder="Search" />

                    <span id='ImSearch' > <ImSearch  /></span>

                    <div id="two" ></div>

                </div>

                <div id="other_div">
                </div>


              

                <div className='last'>
                    <div id="main_div">

                        <h5 id="profile_tag">
                            <Link to="/productpage" style={{ display: "flex", alignItems: "center", gap: "5vh" }}>
                                <span > <ImUser /></span>

                                Account
                            </Link>
                        </h5>
                        <div id="asim7" >
                            <div id="b">
                                <div className="div" id="d1">
                                    <h5 id="lh5">Welcome</h5>
                                    <p id="lp">To access account and manage order</p>
                                    {AuthToken ?<button id="ls"
                                    onClick={()=>{localStorage.removeItem("userShop");navigate("/")}}
                                    >Logout</button>  : <button id="ls"><Link to="/login">Login/SignUp</Link></button>}
                             
                                    <br />
                                    <>
                                        <ul style={{ textAlign: "left" }}>
                                            <li><Link to="/admin">Admin</Link></li>
                                            <li><Link to="/productpage">Wishlist</Link></li>
                                            <li><Link to="/productpage">Gift card</Link></li>
                                            <li><Link to="/productpage">Contact us</Link></li>
                                            <li><Link to="/productpage">ShopCart Insider <button id="insider_span">New</button></Link></li>

                                        </ul>

                                    </>




                                </div>




                            </div>
                        </div>
                    </div>












                    <div className='cart' >

                        <Link id="cart_tag" to="/payment" style={{ display: "flex", textAlign: "center", gap: "8vh" }}>
                            <MdShoppingCartCheckout />
                            Cart
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    </div>




}

export default Navbar