import CardTheme from "./CardTheme";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="submit-page">
      <div className="icon">
        <svg
          width="80"
          height="80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#a)" />
          <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
          <defs>
            <linearGradient
              id="a"
              x1="-23.014"
              y1="11.507"
              x2="0"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop offset="1" stop-color="#610595" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="complete-text">
        <h1>Thank You!</h1>
        <p className="complete-feedback">We have added your card details</p>
      </div>
      <Link to="/" className="submit-btn">
        Continue
      </Link>
    </div>
  );
};
export default Complete;
