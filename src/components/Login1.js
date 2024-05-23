import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import "./Login.css"
import Validation from './Valid';
import Navbar from './Navbar';

// create account
const Login1 = () => {
    const [input , setInput] = useState({
        name: "" , email: "" , phone: "" , password: ""
    });

    const [errors, setErrors] = useState({})

    const handleData = (e) => {
      setInput(input => ({...input,[e.target.name]:e.target.value}))
        // console.log(e)
    }
//to store in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(input));
        localStorage.setItem("user", JSON.stringify(input));
        // navigate("/Login");
    }

  return (
    <>
    <Navbar />
    <div className="c">
    
    <form className="containeroo"  onSubmit={handleSubmit}>
  
      {/* signin */}

        <div className="header">
          < div className="texto">Sign-Up to</div>
          <img className="image" src="removelogo.png" alt="" />
        </div>
        <div className="inputo">
          <div className="in">
            <img src="person.png" alt="user"  />
            <input type="text" placeholder="User Name" name="name" value={input.name} onChange={handleData} />
            {errors.name && <span className='text-danger'>{errors.name} </span>}
          </div>
          <div className="in">
            <img src="email.png" alt="email"  />
            <input type="email" placeholder="Email ID" name="email" value={input.email} onChange={handleData} />
            {errors.email && <span className='text-danger'>{errors.email} </span>}
          </div>
          <div className="in">
            <img src="email.png" alt="phone"   />
            <input type="tel" placeholder="Phone No" name="phone" value={input.phone} onChange={handleData} />
            {errors.phone && <span className='text-danger'>{errors.phone} </span>}
          </div>
          <div className="in">
            <img src="password.png" alt="pass"  />
            <input type="password" placeholder="Password" name="password" minLength={10} value={input.password} onChange={handleData} />
            {errors.password && <span className='text-danger'>{errors.password} </span>}
          </div>
        </div>
        <div className="sub">
            <button className="submit" type='submit'>Sign Up</button>
        </div>

        <div className="forget">
            {/* <p className="for">Forget Password</p> */}
            {/* <a href="#" className="for">Forget Password</a> */}
            <p>Already Member? <NavLink to="/login" className='s' >Sign In</NavLink> </p>
        </div>
      </form></div>
    </>
  )
}

export default Login1
