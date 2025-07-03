import Button from "../Button/Button";
import Header from "../Header/Header";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </Button>
      </header>
      {children}
    </aside>
  );
};

export default Modal;
