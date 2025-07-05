import { type PropsWithChildren } from "react";
import classes from "./Form.module.scss";

const Form = ({ children }: PropsWithChildren) => {
  return <div className={classes.form}>{children}</div>;
};

export default Form;
