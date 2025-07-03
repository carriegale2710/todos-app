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
          <Icon path="close" />
        </Button>
      </header>
      {children}
    </aside>
  );
};

export default Modal;
