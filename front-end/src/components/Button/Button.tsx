import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode; //allows any valid React content, including icons
  onClick?: () => void; //optional prop + function that returns nothing
  className?: string; //custom CSS props
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`${classes.btn} ${className}`}>
    {children}
  </button>
);

export default Button;
