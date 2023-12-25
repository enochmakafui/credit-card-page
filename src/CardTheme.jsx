const CardTheme = (props) => {
  return (
    <div className="head-part">
      <div className="grid-cards">
        <div className="card-back">
          <p className="confirmed-cvc">{props.cardCvc}</p>
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
              <p className="card-number">{props.cardNumber}</p>
            </div>

            <div className="personal-details">
              <p className="name">{props.cardName}</p>
              <p className="expiry">
                {" "}
                {props.cardMonth}/{props.cardYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTheme;
