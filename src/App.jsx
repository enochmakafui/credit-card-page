import React, { useState } from "react";

const App = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState("000");
  const handleCardNumberChange = (e) => {
    if (e.target.value.length === 0) {
      setCardNumber("0000 0000 0000 0000");
      return;
    }

    if (e.target.value.length > 16) return;

    // Remove all non-digits
    // create a new string with only digits and no spaces

    let value = e.target.value;
    value = value.replace(/\s/g, ""); // Remove existing spaces
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }
    setCardNumber(formattedValue);
  };

  const handleCardNameChange = (e) => {
    if (e.target.value.length === 0) {
      setCardName("Jane Appleseed");
      return;
    }

    if (e.target.value.length > 20) return;

    setCardName(e.target.value);
  };
  const handleMonthChange = (e) => {
    if (e.target.value.length === 0) {
      setCardMonth("00");
      return;
    }

    if (e.target.value.length > 2) return;

    setCardMonth(e.target.value);
  };
  const handleYearChange = (e) => {
    if (e.target.value.length === 0) {
      setCardYear("00");
      return;
    }
    if (e.target.value.length > 2) return;
    setCardYear(e.target.value);
  };
  const handleCvcChange = (e) => {
    if (e.target.value.length === 0) {
      setCardCvc("000");
      return;
    }
    if (e.target.value.length > 3) return;
    setCardCvc(e.target.value);
  };
  return (
    <div>
      <div className="head-part">
        <div className="card-back">
          <p className="confirmed-cvc">{cardCvc}</p>
        </div>
        <div className="card-front">
          <div className="card-logo">
            <svg
              width="84"
              height="47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.478"
                cy="23.5"
                rx="23.478"
                ry="23.5"
                fill="#fff"
              />
              <path
                d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                stroke="#fff"
              />
            </svg>
          </div>

          <div className="confrimed-details">
            <div>
              <p className="card-number">{cardNumber}</p>
            </div>

            <div className="personal-details">
              <p className="name">{cardName}</p>
              <p className="expiry">
                {" "}
                {cardMonth}/{cardYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-details">
        <label>CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="eg. Jane Appleseed"
          onChange={handleCardNameChange}
        />

        <label>CARD NUMBER</label>
        <input
          type="text"
          placeholder="eg. 1234 5678 1234 5678"
          onChange={handleCardNumberChange}
          maxLength="16"
        />
        <div className="year-details-label">
          <label>EXP.DATE (MM/YY) </label>
          <label>CVC</label>
        </div>
        <div className="year-details">
          <input
            className="month"
            type="text"
            placeholder="MM"
            onChange={handleMonthChange}
          />
          <input
            className="year"
            type="text"
            placeholder="YY"
            onChange={handleYearChange}
          />
          <input
            className=" cvc"
            type="text"
            placeholder="eg. 123"
            onChange={handleCvcChange}
            maxLength="3"
          />
        </div>
        <button type="submit" className="submit-btn">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default App;
