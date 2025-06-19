import classes from "./Header.module.scss";

interface HeaderProps {
  homeHeading: string;
  userName?: string; // optional
}

const Header = ({ homeHeading, userName }: HeaderProps) => {
  return (
    <section>
      <h1>
        {homeHeading} {userName}!
      </h1>
      <div className={classes.divider}></div>
    </section>
  );
};

export default Header;
