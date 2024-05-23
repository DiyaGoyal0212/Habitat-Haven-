import React from 'react';
import "./footer.css";

export default function Footer1() {
    return (
        <div className='container-fluid'>
            <div className='col-3'>
                <div className='heading'>
                <img src="removelogo.png" width={"180px"} />
                    <div className='hi'>Godrej HUB is a blend of legacy and newness and offers finest furniture on rent which consumers can later buy</div>
                </div>
            </div>
            <div className='col-3'>
                <div className='heading'>
                   <b>Furniture</b> 
                    <div className='hiii'><a href='#' id="hiii">Bedroom Furniture On Rent</a></div>
                    <div className='hiii'><a href='#' id="hiii">Living Room Furniture on Rent</a></div>
                    <div className='hiii'><a href='#' id="hiii">Dining Room Furniture on Rent</a></div>
                    <div className='hiii'><a href='#' id="hiii">Storage Furniture on Rent</a></div>
                    <div className='hiii'><a href='#' id="hiii">Work from Home Furniture on Rent</a></div>
                </div>
                <div className='ha'>
                    <b>Appliances</b>
                    <div className='hiii'><a href='#' id="hiii">Refrigerators On Rent</a></div>
                </div>
            </div>
            <div className='col-3'>
                <div className='heading'>
                    <b>Policy</b>
                    <div className='hiii'><a href='#' id="hiii">Terms & Conditions</a></div>
                    <div className='hiii'><a href='#' id="hiii">Privacy Policy</a></div>
                </div>
                <div className='ho'>
                    <b>Contact</b> 
                    <div className='hiii'><a href='#' id="hiii">Contact Us</a></div>
                    <div className='hiii'><a href='#' id="hiii">Email</a></div>
                </div>
            </div>
            <div className='col-2'>
                <div className='heading'>
                    <b>About</b>
                    <div className='hiii'><a href='#' id="hiii">About Us</a></div>
                </div>
                <div className='he'>
                    <b>Help</b> 
                    <div className='hiii'><a href='#' id="hiii">Get Help</a></div>
                    <div className='hiii'><a href='#' id="hiii">Help Page</a></div>
                </div>
            </div>
            {/* <div className="col-1" id="sss">
                &copy; 2024 Rental Hub | Designed by Team
            </div> */}
        </div>

    );
}