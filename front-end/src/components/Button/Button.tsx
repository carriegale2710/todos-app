import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={classes.btn} onClick={onClick}>
    {children}
  </button>
);

export default Button;
