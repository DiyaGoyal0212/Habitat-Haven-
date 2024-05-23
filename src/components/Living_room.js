import React ,{useState} from "react";
import "./room.css";
import Menu from "./a2";
import Navbar from "./Navbar";
import Cart from "./cart";
//import Menu2 from "./a12";


export default function Liv(){
    const [item,setItem] = useState(Menu);
    const Fileteritem = (categitem) => {
        const updateit = Menu.filter((curEle) => {
            return curEle.category === categitem;

        })
        setItem(updateit);
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
    <h1>Sofa on Rent</h1>
    <br/>
    <div className="filter">
        <button onClick={() => Fileteritem('sofa') }>Sofa</button>
        <button onClick={() => Fileteritem('Cupboard')}>Cupboard</button>
        <button onClick={() => Fileteritem('table')}>Dinning Table</button>
        
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
                    <p>{price}</p>
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