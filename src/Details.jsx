import React from "react";
import { Link } from "react-router-dom";

const Details = (props) => {
  return (
    <form className="card-details">
      <label>CARDHOLDER NAME</label>
      <input
        type="text"
        placeholder="eg. Jane Appleseed"
        onChange={props.handleCardNameChange}
      />

      <label>CARD NUMBER</label>
      <input
        type="text"
        placeholder="eg. 1234 5678 1234 5678"
        onChange={props.handleCardNumberChange}
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
          onChange={props.handleMonthChange}
          maxLength="2"
        />
        <input
          className="year"
          type="text"
          placeholder="YY"
          onChange={props.handleYearChange}
          maxLength="2"
        />
        <input
          className=" cvc"
          type="text"
          placeholder="eg. 123"
          onChange={props.handleCvcChange}
          maxLength="3"
        />
      </div>
      <Link to="/complete" className="submit-btn">
        Confirm
      </Link>
    </form>
  );
};

export default Details;
