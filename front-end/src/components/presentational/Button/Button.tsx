import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode; //allows any valid React content, including icons
  variants?: string[]; //custom styling with CSS props
  altText?: string;
}

const Button: React.FC<ButtonProps> = ({
  variants,
  type = "button",
  altText,
  children,
  ...rest
}) => {
  const classNames = [classes.btn];
  variants &&
    variants.length > 0 &&
    variants.forEach((name) => classNames.push(classes[name] ?? ""));
  return (
    <button
      aria-label={altText}
      className={classNames.join(" ")}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
