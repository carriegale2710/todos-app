import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode; //allows any valid React content, including icons
  onClick?: () => void; //optional prop + function that returns nothinh
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={classes.btn} onClick={onClick}>
    {children}
  </button>
);

export default Button;
