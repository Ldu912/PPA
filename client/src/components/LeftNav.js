import React from "react";
import { NavLink } from "react-router-dom";

const LeftNavs = () => {
  return (
    <div className="left-navcontainer">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/home.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/rocket.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/user.svg" alt="home" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNavs;
