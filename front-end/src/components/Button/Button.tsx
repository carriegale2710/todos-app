import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode; //allows any valid React content, including icons
  //button events
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  variants?: string[]; //custom styling with CSS props
  type?: "button" | "submit" | "reset"; //for forms
  disabled?: boolean; //disabling button if form inputs invalid
}

const Button: React.FC<ButtonProps> = ({
  variants,
  type = "button",
  children,
  ...rest
}) => {
  const classNames = [classes.btn];
  variants &&
    variants.length > 0 &&
    variants.forEach((name) => classNames.push(classes[name] ?? ""));
  return (
    <button className={classNames.join(" ")} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
