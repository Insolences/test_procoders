import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authenticationActions from "../../store/actions/authenticationActions";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import styles from "./Header.module.scss";

export const Header = () => {
  const isLogged = useSelector((state) => state.authentication.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authenticationActions.signOut());
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <Navbar className={styles.navbarContainer}>
      <NavbarBrand onClick={() => navigate("/")}>
        <img src={"logo192.png"} />
      </NavbarBrand>
      <Nav>
        {isLogged && (
          <>
            <NavItem className={styles.navItem}>
              <NavLink active onClick={() => navigate("/news")}>
                News
              </NavLink>
            </NavItem>
            <NavItem className={styles.navItem}>
              <NavLink active onClick={() => navigate("/profile")}>
                Profile
              </NavLink>
            </NavItem>
          </>
        )}
        <NavItem className={styles.navItem}>
          <NavLink onClick={isLogged ? handleLogOut : handleSignIn}>
            {isLogged ? "Sign out" : "Sign in"}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
