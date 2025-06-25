import classes from "./Header.module.scss";

interface HeaderProps {
  heading: string;
  userName?: string; // optional
}

const Header = ({ heading, userName }: HeaderProps) => {
  return (
    <section>
      <h1 className={classes.text}>
        {heading} {userName}
      </h1>
      <div className={classes.divider}></div>
    </section>
  );
};

export default Header;
