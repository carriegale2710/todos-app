import { useNavigate } from "react-router-dom";
import Button from "../../components/presentational/Button/Button";
import Form from "../../components/presentational/Form/Form";
import Modal from "../../components/presentational/Modal/Modal";

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();

  return (
    <>
      <Modal
        heading="Log In"
        onClose={() => {
          navigate("/tasks");
        }}
      >
        <Form>
          <form onSubmit={onLogin}>
            <div>
              <label htmlFor="email">FirstName</label>
              <input name="email" type="text" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="password">lastName</label>
              <input name="password" type="text" placeholder="Password" />
            </div>
            <br />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </Modal>
    </>
  );
};

export default LoginPage;
