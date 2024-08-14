import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState } from "react";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const getNavLinkClassNameMob = ({ isActive }) =>
  clsx(css.navLinkMob, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const AuthNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <div className={css.authNav}>
      <NavLink className={getNavLinkClassName} to="/register">
        Registration Page
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Login Page
      </NavLink>
      <IconContext.Provider value={{ size: "2em" }}>
        <div className={css.mobBtn} onClick={handleMenuOpen}>
          <FiAlignJustify />
        </div>
      </IconContext.Provider>
      {showMenu && (
        <div className={css.mobContainer}>
          <IconContext.Provider value={{ size: "2em" }}>
            <div className={css.mobBtnClose} onClick={handleMenuClose}>
              <FiX />
            </div>
          </IconContext.Provider>
          <NavLink
            className={getNavLinkClassNameMob}
            onClick={handleMenuClose}
            to="/register"
          >
            Registration Page
          </NavLink>
          <NavLink
            className={getNavLinkClassNameMob}
            onClick={handleMenuClose}
            to="/login"
          >
            Login Page
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default AuthNav;
