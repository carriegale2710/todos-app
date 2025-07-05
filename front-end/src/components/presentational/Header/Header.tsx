import classes from "./Header.module.scss";

interface HeaderProps {
  heading: string;
  userName?: string; // optional
  className?: string;
}

const Header = ({ heading, userName, className }: HeaderProps) => {
  return (
    <section>
      <h1 className={className}>
        {heading} {userName}
      </h1>
      <div className={classes.divider}></div>
    </section>
  );
};

export default Header;
