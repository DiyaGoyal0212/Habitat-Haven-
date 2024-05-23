import React ,{useState} from "react";
import "./bed.css";
import Menu2 from "./menu2";
import Navbar from './Navbar';
import Cart from "./cart";

export default function Fridge(){
    const [item,setItem] = useState(Menu2);
    const Fileteritem = (categitem) => {
        const updateit = Menu2.filter((curEle) => {
            return curEle.category === categitem;

        })
        setItem(updateit);
    }

    function Fileter(){
        setItem(Menu2);
    }

    const [cart,setCart] = useState([])
    const addtocart = (data) =>{
        setCart([...cart, {...data, quantity:1}])
    }

    const [showcart,setShow] = useState(false);

    const handleShow = (value) =>{
        setShow(value);

    }


    return(
    <>
    <Navbar handleShow={handleShow}/>
    {
        showcart? <Cart cart={cart}/>:
    <div className="containero">
    <h1>Washing Machines on Rent</h1>
    <br/>
    <div className="filter">
        <button onClick={() => Fileter('Menu2') }>All Items</button>
        <button onClick={() => Fileteritem('single-door')}>Single Door</button>
        <button onClick={() => Fileteritem('double-door')}>Double Door</button>
        
    </div>
    
    <div className="cardop">
       {
        item.map((ele) => {
            const {id, img , name, price, status} = ele;
            return(
                <div className="card-item">
                    <img src={img} alt="photo" width="400px"></img>
                    <h2>{name}</h2>
                    <div className="para">
                    <p>Rs. {price}</p>
                    <p>{status}</p>
                    <button className="button"
                    onClick={() => addtocart(ele)}                    
                    
                     >ADD TO CART</button>
                    </div>
                </div>
            )

            
        })}

       
    </div>
    <br/><br/>
</div>
}

   
    

    </>
    )}