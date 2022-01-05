import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import styles from "./Header.module.scss";
export const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  const handleLogOut = () => {
    setIsLogged(false);
  };

  return (
    <Navbar className={styles.navbarContainer}>
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <Nav>
        {isLogged && (
          <>
            <NavItem className={styles.navItem}>
              <NavLink active href="/news">
                News
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink active href="/profile">
                Profile
              </NavLink>
            </NavItem>
          </>
        )}
        <NavItem className={styles.navItem}>
          <NavLink href="/login" onClick={handleLogOut}>
            {isLogged ? "Log out" : "Log in"}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
