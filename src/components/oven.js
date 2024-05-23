import React ,{useState} from "react";
import "./bed.css";
import Menu3 from "./menu3";
import Navbar from './Navbar';
import Cart from "./cart";


export default function Oven(){
    const [item,setItem] = useState(Menu3);
    const Fileteritem = (categitem) => {
        const updateit = Menu3.filter((curEle) => {
            return curEle.category === categitem;

        })
        setItem(updateit);
    }

    function Fileter(){
        setItem(Menu3);
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
        <button onClick={() => Fileter('Menu3') }>All Items</button>
        <button onClick={() => Fileteritem('counter-top')}>Counter Top</button>
        <button onClick={() => Fileteritem('convection')}>Convection</button>
        
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
    )
}