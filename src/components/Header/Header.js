import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import authenticationActions from "../../store/actions/authenticationActions";
export const Header = () => {
  const isLogged = useSelector(state => state.authentication.isAuth)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(authenticationActions.singOut())
  };

  return (
    <Navbar className={styles.navbarContainer}>
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <Nav>
        {isLogged && (
          <>
            <NavItem className={styles.navItem}>
              <NavLink active onClick={() => navigate('/news')} >
                News
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink active onClick={() => navigate('/profile')} >
                Profile
              </NavLink>
            </NavItem>
          </>
        )}
        <NavItem className={styles.navItem}>
          <NavLink onClick={handleLogOut}>
            {isLogged ? "Log out" : "Log in"}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
