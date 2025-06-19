import classes from "./typography.module.scss";

export const H1 = ({ color = "primary", children, ...rest }) => {
  return (
    <h1 className={`${classes.heading}`} {...rest}>
      {children}
    </h1>
  );
};

export const H2 = ({ color = "primary", children, ...rest }) => {
  return (
    <h2 className={`${classes.heading}`} {...rest}>
      {children}
    </h2>
  );
};
