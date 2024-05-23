import React, { useEffect, useRef, useState } from "react";
import Home from "./Valid";
import './Newsignup.css';
import Navbar from "./Navbar";
function Newsignup() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }
        if (localEmail) {
            setShow(true);
        }
    }, [localSignUp, localEmail]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            if (!validateEmail(email.current.value)) {
                setErrorMessage("Please enter a valid email address");
                return;
            }
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            alert("Account created successfully!!");
            window.location.reload();
        } else {
            setErrorMessage("All fields are required");
        }
    };

    const handleSignIn = () => {
        if (!validateEmail(email.current.value)) {
            setErrorMessage("Please enter a valid email address");
            return;
        }
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value);
            window.location.reload();
        } else {
            setErrorMessage("Please enter valid credentials");
        }
    };

    return (
        <div>
            <Navbar />
            {showHome ? <Home /> :
                (show ?
                    <div className="containerd">
                        <h1>Hello {localName}</h1>
                        <div className="input_spaced">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_spaced">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                        {errorMessage && <p className="error">{errorMessage}</p>}
                    </div>
                    :
                    <div className="containerd">
                        <div className="input_spaced">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_spaced">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_spaced">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button className="buttond" onClick={handleClick}>Sign Up</button>
                        {errorMessage && <p className="error">{errorMessage}</p>}
                    </div>)
            }
        </div>
    );
}

export default Newsignup;
