import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardTheme from "./CardTheme";
import Details from "./Details";
import Complete from "./Complete";

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
    <div className="wrapper">
      <BrowserRouter>
        <CardTheme
          cardCvc={cardCvc}
          cardNumber={cardNumber}
          cardName={cardName}
          cardMonth={cardMonth}
          cardYear={cardYear}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Details
                handleCardNumberChange={handleCardNumberChange}
                handleCardNameChange={handleCardNameChange}
                handleMonthChange={handleMonthChange}
                handleYearChange={handleYearChange}
                handleCvcChange={handleCvcChange}
              />
            }
          />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
