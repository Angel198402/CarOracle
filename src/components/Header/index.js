import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import "./style.scss";
export default function Header() {
  const [isFirstExpanded, setIsFirstExpanded] = useState(true);
  const firstClick = () => {
    setIsFirstExpanded(!isFirstExpanded);
    console.log("sdfsdfsdf");
  };
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="../images/header-logo.png" alt="header-logo" />
        </Link>
      </div>
      <div className="header-subtitle">
        <div className="header-subtitle-item" onClick={firstClick}>
          <p className="nunitosans  primarybluetext">Buying & Selling</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
        <div className="header-subtitle-item">
          <p className="nunitosans  primarybluetext">Maintenance</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
        <div className="header-subtitle-item">
          <p className="nunitosans  primarybluetext">Finance & Insurance</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
        <div className="header-subtitle-item">
          <p className="nunitosans  primarybluetext">Car care</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
        <div className="header-subtitle-item">
          <p className="nunitosans  primarybluetext">Education</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
        <div className="header-subtitle-item">
          <p className="nunitosans  primarybluetext">Comparisons</p>
          <img src="../images/down-arrow.png" alt="header-logo" />
        </div>
      </div>
      <div className="header-searchicon">
        <img src="../images/search-icon.png" alt="header" />
      </div>
      <div
        className={`firstDropdown lightbluecomplementary ${
          isFirstExpanded ? "hidden" : ""
        }`}
        onClick={firstClick}
      >
        <Link to="/VehiclePurchasing">
          <DropdownItem />
        </Link>
        <DropdownItem />
        <DropdownItem />
        <DropdownItem />
      </div>
    </div>
  );
}
