import classes from "./Button.module.scss";

const Button = ({ children }) => {
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
