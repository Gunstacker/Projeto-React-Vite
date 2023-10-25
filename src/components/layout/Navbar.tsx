// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "./NavbarContainer";
import styles from "./Navbar.module.css";
import logo from "../../img/logo3.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavbarContainer>
        <ul className={styles.list}>
            <Link to="/">
                <li className={styles.item}>
                    <img className={styles.logoImg} src={logo} alt="Logo" />
                </li>
            </Link>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Login">Login</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Cadastro">Cadastro</Link>
          </li>
        </ul>
      </NavbarContainer>
    </nav>
  );
}

export default Navbar;
