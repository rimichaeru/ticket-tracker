import React from "react";
import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/developer">Developer</Link>
          </li>
          <li>
            <Link to="/junior">Junior</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
