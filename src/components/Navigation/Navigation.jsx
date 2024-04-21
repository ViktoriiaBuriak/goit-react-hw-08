import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <div className={css.pages}>
        <NavLink className={getNavLinkClassName} to="/register">
          Registration Page
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/login">
          Login Page
        </NavLink>
      </div >
    </nav>
  );
};

export default Navigation;
