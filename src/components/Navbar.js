import React,{useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import "./image.css"
import { NavLink } from 'react-router-dom';

function Navbar(props) {


 

    const [query, setQuery] = useState("")

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)

        
    }
  return (

<div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="ppp">
        <div className="container-fluid">
          <NavLink to='/'> <img className='logo' 
          src={require("./removelogo.png")} /> </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Furniture
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() =>props.handleShow(false)}>
                    <a className="dropdown-item" href="#">
                    <NavLink to="/a11" className="drop">Bedroom</NavLink>
                    </a>
                  </li>
                  <li onClick={() =>props.handleShow(false)}>
                    <a className="dropdown-item" href="#">
                    <NavLink to="/Living_room" className="drop">Living Room</NavLink>
                    </a>
                  </li>
                  
                  <li onClick={() =>props.handleShow(false)}>
                    <a className="dropdown-item" href="#">
                    <NavLink to="/Storage_room" className="drop">Storage Room</NavLink>
                    </a>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Appliances
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {/* <a className="dropdown-item" href="#">
                      Refrigerator
                    </a> */}
                    <NavLink to="/fridge" className="drop">Refrigerator</NavLink>
                  </li>
                  <li onClick={() =>props.handleShow(false)}>
                    {/* <a className="dropdown-item" href="#">
                      Washing Machine
                    </a> */}
                    <NavLink to="/washing" className="drop">Washing Machine</NavLink>
                  </li>
                  <li>
                    {/* <a className="dropdown-item" href="#">
                      Microwave Oven
                    </a> */}
                     <NavLink to="/oven" className="drop">Microwave</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Service & Support
                </a> */}
                <NavLink to="/service" className="drop">Service & Support</NavLink>
              </li>
              
            </ul>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={search}
                value={query}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              
              </button>
            </form> */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i onClick={() => props.handleShow(true)} className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  <i className="fas fa-user-circle"></i>
                </a> */}
                <NavLink to="/Newsignup"><i className="fas fa-user-circle"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar