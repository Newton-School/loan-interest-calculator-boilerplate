import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  const [amount, setLoanAmount] = useState(500);
  const [months, setMonths] = useState(6);
  const [interestObject, setInterestObject] = useState({
    rate: 5,
    total: 650,
  });

  useEffect(() => {}, []);

  const amountHandler = (e) => {};
  const monthsHandler = (e) => {};

  return (
    <div id="main">
      <div className="container card">
        <h1>Interest Calculator</h1>
        <form>
          <div className="form-group">
            <label>Loan Amount</label>
            <div className="input-component">
              <input
                type="range"
                min="500"
                step="100"
                max="5000"
                onInput={}
                className="input-slider"
              ></input>
              <span id="amount-val">${amount}</span>
            </div>
          </div>
          <div className="form-group">
            <label>Loan Duration (in months)</label>
            <div className="input-component">
              <input
                type="range"
                min="6"
                step="2"
                max="60"
                onInput={}
                defaultValue={6}
                className="input-slider"
                id="month-slider"
              ></input>
              <span id="months-val">{months}</span>
            </div>
          </div>
        </form>
        <br />
        <div className="interest-details-wrapper">
          <h2>Interest Details: </h2>
          <p className="interest-data">
            <span className="interest-label">Interest Rate: </span>
            <span className="interest-display data-display">
              {interestObject.rate}%
            </span>
          </p>
          <p className="interest-data">
            <span className="interest-label">Total amount to be paid: </span>{" "}
            <span className="payment-display data-display" id="interest-total">
              ${interestObject.total}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
