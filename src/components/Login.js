import React, { useState } from 'react';
import './Login.css';
import Validation from './Valid.js';
import { Link} from 'react-router-dom';
import Navbar from './Navbar.js';
// import { FaPhoneAlt } from "react-icons/fa";

const Login = () => {
  // const navigate = useNavigate();
  const [input , setInput] = useState({
    email: "" , password: "",
  });

  const [errors, setErrors] = useState({})

  const handleData = (e) => {
    setInput(input => ({...input,[e.target.name]:e.target.value}))
    // console.log(e);
}

  //to check the validation
  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(Validation(input));
    const logu = JSON.parse(localStorage.getItem("user"));
    // if(input.email ===logu.email && input.password === logu.password){
    //   navigate("/");
    // }
    // else{
    //   alert("Wrong Email or Password");
    // }
  }

  return (
    <>
    <Navbar />
    <div className='c'>
    <form div className="containeroo" onSubmit={handleLogin}>
      {/* signin */}
        <div className="header">
            <div className="texto">Sign-in to</div>
            <img className="image" src="removelogo.png" alt="" />
        </div>
        <div className="inputo">
          <div className="in">
            <img src="email.png" alt="email"  />
            <input type="email" placeholder="Email ID" name="email" value={input.email} onChange={handleData} />
            {errors.email && <span className='text-danger'>{errors.email} </span>}
          </div>
          <div className="in">
            <img src="password.png" alt="pass"  />
            <input type="password" placeholder="Password" name="password" value={input.password} onChange={handleData} />
            {errors.password && <span className='text-danger'>{errors.password} </span>}
          </div>
        </div>
        <div className="sub">
        <button className="submit">Sign in</button>
        </div>

        <div className="forget">
            <a href="#" className="for">Forget Password</a>
            <p>New to Habitat Haven? <Link to="/signup" className='s'>Create Account</Link> </p>
        </div>
      </form></div></>
      
  )
}

export default Login
