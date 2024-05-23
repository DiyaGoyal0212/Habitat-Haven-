import React, { useEffect, useState } from 'react';
import "./cart.css";
import { NavLink } from 'react-router-dom';


export default function Cart({cart}){

    const [CART,setCART] = useState([])
    useEffect(() => {
        setCART(cart);
    } , [cart])
    return(
        <>
        {
            CART?.map((cartItem,cartindex) =>{
                return(
                <div className='cart'>
                    <img src={cartItem.img} />
                    <span>{cartItem.name}</span>
                    <button
                    onClick={() => {
                        const _cart = CART.map((item,index) => {
                            return cartindex === index ? {...item , quantity: item.quantity>0?item.quantity-1:0 } : item
                        })
                        setCART(_cart)
                    }}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button
                    onClick={() => {
                        const _cart = CART.map((item,index) => {
                            return cartindex === index ? {...item , quantity: item.quantity+1 } : item
                        })
                        setCART(_cart)
                    }}>+</button>
                    <span>Rs. {(cartItem.price)*(cartItem.quantity)}</span>

                </div>
                )
            }


            )}

            <p> TOTAL <span></span>
                {
                CART.map(item => item.price*item.quantity).reduce((total,value) => total + value,0)
                } 
            </p>

           <NavLink to="https://paytm.com/"> <button className='pay'>PROCEED TO PAY</button></NavLink>

</>
    )
    

}