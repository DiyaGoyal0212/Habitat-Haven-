import React, { useState } from 'react';
import './service.css';
import Navbar from "./Navbar";

const Service = () => {
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [selected3, setSelected3] = useState(null);
    const [selected4, setSelected4] = useState(null);

    const toggle1 = (i) => {
        setSelected1(selected1 === i ? null : i);
        setSelected2(null);
        setSelected3(null);
        setSelected4(null);
    };

    const toggle2 = (i) => {
        setSelected1(null);
        setSelected2(selected2 === i ? null : i);
        setSelected3(null);
        setSelected4(null);
    };

    const toggle3 = (i) => {
        setSelected1(null);
        setSelected2(null);
        setSelected3(selected3 === i ? null : i);
        setSelected4(null);
    };

    const toggle4 = (i) => {
        setSelected1(null);
        setSelected2(null);
        setSelected3(null);
        setSelected4(selected4 === i ? null : i);
    };

    const handleClicka = () => {
       
        window.location.href = '#wow';
    };
    const handleClickb = () => {
      
        window.location.href = '#wow1';
    };
    const handleClickc = () => {
       
        window.location.href = '#wow2';
    };
    const handleClickd = () => {
       
        window.location.href = '#wow3';
    };
    return (
        <>
        <Navbar />
            <div>
                <div className="container-fluid" id="c1">
                    <h3>FAQ's</h3>
                </div>
                <div className="container-fluid" id="c2">
                    <p>Can't find answer? Call us at 1-800-267-1122 or email us at hubcare@godrej.com</p>
                </div>
                <div className="container" >
                    <div className="row">
                        <div className="col-9" id="c3">
                            <div className="hello">
                                <button onClick={handleClicka} id="wow">
                                    <div className='container-fluid'>
                                        <div className='row' id="s1">
                                            <div className='col-3' id='meow'>
                                                 <b>SUBSCRIPTION AND ORDER</b>
                                                <br />
                                                Frequently Asked order questions by users
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button onClick={handleClickb} id="wow1">
                                    <div className='container-fluid'>
                                        <div className='row' id="s2">
                                            <div className='col-3' id='meow'>
                                                <b>DELIVERY AND INSTALLATION</b>
                                                <br />
                                                Frequesntly Asked delivery and <br /> installation questions by users
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button onClick={handleClickc} id="wow2">
                                    <div className='container-fluid' >
                                        <div className='row' id="s3">
                                            <div className='col-3' id='meow'>
                                            <b>CANCELLATION AND RETURNS</b>
                                                <br />
                                                Frequently Asked cancellation and <br /> return questions by users
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button onClick={handleClickd} id="wow3">
                                    <div className='container-fluid'>
                                        <div className='row' id="s4">
                                            <div className='col-3' id='meow'>
                                                <b>SERVICES</b>
                                                <br />
                                                Frequesntly Asked service <br /> questions by users
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8" id="c4">
                        <div className='accordion'>
                            <p id="p1">SUBSCRIPTION AND ORDER</p>
                            {data.map((item, i) => (
                                <div className='item'>
                                    <div className='title' onClick={() => toggle1(i)}>
                                        <h5 id="q1">{item.question}</h5>
                                        <span>{selected1 === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected1 === i ? 'con' : 'content'}>
                                    <p id="an1">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='accordion'>
                            <br /> <br />
                            <p id="p1">DELIVERY & INSTALLATION</p>
                            {data2.map((item, i) => (
                                <div className='item'>
                                    <div className='title' onClick={() => toggle2(i)}>
                                        <h5 id="q1">{item.question}</h5>
                                        <span>{selected2 === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected2 === i ? 'con' : 'content'}>
                                    <p id="an1">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='accordion' id="Sub2">
                            <br /> <br />
                            <p id="p1">CANCELLATION & RETURNS</p>
                            {data3.map((item, i) => (
                                <div className='item'>
                                    <div className='title' onClick={() => toggle3(i)}>
                                        <h5 id="q1">{item.question}</h5>
                                        <span>{selected3 === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected3 === i ? 'con' : 'content'}>
                                        <p id="an1">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='accordion'>
                            <br /> <br />
                            <p id="p1">SERVICES</p>
                            {data4.map((item, i) => (
                                <div className='item'>
                                    <div className='title' onClick={() => toggle4(i)}>
                                        <h5 id="q1">{item.question}</h5>
                                        <span id="si">{selected4 === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected4 === i ? 'con' : 'content'}>
                                        <p id="an1">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
const data = [
    {
        id: 1,
        question: 'What documents am I expected to share at the time of booking?',
        answer: 'The customer is expected to share Identity Proof & Delivery Address Proof.'
    },
    {
        id: 2,
        question: 'Where can I make the payment for my rental dues?',
        answer: 'After logging into the “My Account” section, you can pay all your rental dues under the Payment Tab.'
    },
    {
        id: 3,
        question: 'Are there any hidden charges or taxes that I must pay?',
        answer: 'The Rental Monthly Installment that is displayed against the product on website is inclusive of taxes. Delivery, Installation and Pick-up is free. There are no hidden charges.'
    }

]
const data2 = [
    {
        id: 1,
        question: 'Are there any charges for delivery and pick-up of products?',
        answer: 'No, the delivery and pick-up will be done free of cost by the Godrej HUB team.'
    },
    {
        id: 2,
        question: 'Will I receive pre-assembled products?',
        answer: 'The products will be delivered in flat-pack and assembled at customer address. The products will be in mint condition'
    },
    {
        id: 3,
        question: 'Are there any charges for installation of the furniture?',
        answer: 'No, installation of the products will be done free of cost by the Godrej HUB team.'
    }

]
const data3 = [
    {
        id: 1,
        question: 'What should I do if a Transaction fails?',
        answer: 'If your account has been debited after a payment failure, it will be rolled back within 7 working days.'
    },
    {
        id: 2,
        question: 'How and when would I get my security deposit back?',
        answer: 'In cases of termination/completion of the subscription tenure, the security deposit shall be credited back to the same account from which the amount was paid while booking the order and shall be done so within 15 business days.'
    },
    {
        id: 3,
        question: 'Will my entire security deposit be refunded if I cancel the subscription ',
        answer: 'Customer can cancel the subscription anytime, however if he/she cancels before the Lock-in period  the entire security deposit shall be forfeited & shall not be refunded'

    }

]
const data4 = [
    {
        id: 1,
        question: 'Does Godrej HUB provide relocation services?',
        answer: 'No, currently we don’t provide relocation services.'
    },
    {
        id: 2,
        question: 'Can I change my Mobile number or Shipping address?',
        answer: 'You can change your Mobile number and/or shipping address in the profile section of “My Account”. However, the changed details will be applicable on your new order and not be applicable for past or running orders.'
    },
    {
        id: 3,
        question: 'Can I raise a service request for the products?',
        answer: 'Yes, you can raise a service request of the products on 1-800-267-1122'

    }

]
export default Service