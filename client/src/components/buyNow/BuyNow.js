import React from 'react'
import { useHistory } from 'react-router-dom';
import './BuyNow.css';

function BuyNow() {

    const history = useHistory();

    return (
        <div className="buy-now-container">
            <h2 onClick={() => history.push("/")}>Back To StOrE</h2>
            <div className="buy-now-form-container">
                <h2>Buy Now</h2>
                <div className="buy-now-inputs">
                    <div>First Name</div>
                    <input type="text" required placeholder="First Name" />
                </div>

                <div className="buy-now-inputs">
                    <div>Last Name</div>
                    <input type="text" required placeholder="Last Name" />
                </div>
                <div className="buy-now-inputs">
                    <div>Email</div>
                    <input type="text" required placeholder="Email" />
                </div>
                <div className="buy-now-inputs">
                    <div>Credit Card Number*</div>
                    <input type="text" required placeholder="Card Number" />
                </div>
                <button onClick={() => alert("Transaction Successful")}>Pay Now</button>
            </div>
        </div>

    )
}

export default BuyNow
