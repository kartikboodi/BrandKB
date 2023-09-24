import React from "react";
import "./Header.css";

const Header = ({ children, rank }) => {
  return (
    <div className="Header">
      <span className={rank}>{children}</span>
    </div>
  );
};

export default Header;
