import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode; //allows any valid React content, including icons
  onClick?: () => void; //button functions
  className?: string; //custom styling with CSS props
  type?: "button" | "submit" | "reset"; //for forms
  disabled?: boolean; //disabling button if form inputs invalid
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${classes.btn} ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
