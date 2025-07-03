import Button from "../Button/Button";
import Header from "../Header/Header";
import Icon from "../Icon/Icon";
import classes from "./Modal.module.scss";

interface ModalProps {
  heading: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ heading, children, onClose }) => {
  return (
    <aside className={classes.modal}>
      <header className={classes.header}>
        <Header heading={heading} />
        <Button
          type="button"
          onClick={onClose}
          variants={["icon-btn", "hover_highlight"]}
        >
          <Icon path="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </Button>
      </header>
      {children}
    </aside>
  );
};

export default Modal;
