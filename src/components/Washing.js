import React ,{useState} from "react";
import "./bed.css";
import Menu from "./menu";
import Cart from "./cart";
import Navbar from "./Navbar";


export default function Washing(){


    const [item,setItem] = useState(Menu);
    const Fileteritem = (categitem) => {
        const updateit = Menu.filter((curEle) => {
            return curEle.category === categitem;

        })
        setItem(updateit);
    }

    function Fileter(){
        setItem(Menu);
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
        <button onClick={() => Fileter('Menu') }>All Items</button>
        <button onClick={() => Fileteritem('semi-automatic-machine')}>Semi Automatic</button>
        <button onClick={() => Fileteritem('automatic-machine')}>Fully Automatic</button>
        
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