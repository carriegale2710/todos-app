import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";

const NavBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <nav className={classes.nav}>
    <Link to="/">Home</Link>
    <Link to="/">Tasks</Link>
    {!isLoggedIn ? (
      <Link to="/login">Login</Link>
    ) : (
      <Link to="/login">Log out</Link>
    )}
  </nav>
);

export default NavBar;
