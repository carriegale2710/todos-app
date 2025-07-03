import type { ReactNode } from "react";
import classes from "./ToolBar.module.scss";

//just display whatever filter components are passed in here
//eg. filter by category, sortBy, etc...

type Props = {
  children: ReactNode;
};

const ToolBar = ({ children }: Props) => {
  return <section className={classes.toolBar}>{children}</section>;
};

export default ToolBar;
