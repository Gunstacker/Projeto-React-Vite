import React from "react";
import styles from "./NavbarContainer.module.css";

function NavbarContainer({ children }) {
  return <div className={`${styles.container}`}>{children}</div>;
}

export default NavbarContainer;