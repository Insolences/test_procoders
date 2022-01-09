import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authenticationActions from "../../store/actions/authenticationActions";

export const Header = () => {
  const isLogged = useSelector((state) => state.authentication.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authenticationActions.singOut());
  };

  const handleSingIn = () => {
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
          <NavLink onClick={isLogged ? handleLogOut : handleSingIn}>
            {isLogged ? "Sing out" : "Sing in"}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
