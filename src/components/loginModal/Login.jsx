import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, props } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const notify1 = () => toast("Login Successful :) ");
  const notify2 = () => toast("Enter the details :)");
  const notify3 = () => toast("Login Failed :(");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState();
  const [isValid, setIsValid] = useState({
    email: true,

    password: true,
  });

  const inputPasswordHandler = (event) => {
    setInputPassword(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsValid({ ...isValid, password: false });
    } else {
      setIsValid({ ...isValid, password: true });
      setInputPassword(event.target.value);
     
    }
  };

  async function loginUser(credentials) {
    try {
      return fetch("https://hotelbooking-backend.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }).then((data) => data.json());
    } catch (error) {
      return error;
    }
  }

 
  const SubmitHandler1 = async (e) => {
    e.preventDefault();
    if (inputPasswordHandler != "" || inputEmailHandler != "") {
      const token = await loginUser({
        inputEmail,
        inputPassword,
      });
      if (!token) {
        notify3();
      }
      setToken(token).then((e) => notify1());
    }
  };

  const inputEmailHandler = (event) => {
    setInputEmail(event.target.value);
    if (event.target.value.trim().length === 0) {
      setIsValid({ ...isValid, email: false });
    } else {
      setIsValid({ ...isValid, email: true });
      setInputEmail(event.target.value);

    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-content">
          <div className="modal-content-header">
            <span className="span-demo">Login</span>
            <Button className="close" onClick={handleClose}>
              &times;
            </Button>
          </div>
          <div className="modal-content-body">
            <form className="ant-form" onSubmit={SubmitHandler1}>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Email:</label>
                </div>
                <input
                  className="ant-input"
                  value={inputEmail}
                  onChange={inputEmailHandler}
                  required
                ></input>
                {isValid.email ? (
                  ""
                ) : (
                  <span style={{ color: "red", marginLeft: "80px" }}>
                    This field is required
                  </span>
                )}
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Password:</label>
                </div>
                <input
                  type="text"
                  className="ant-input"
                  value={inputPassword}
                  onChange={inputPasswordHandler}
                  required
                ></input>
                {isValid.password ? (
                  ""
                ) : (
                  <span style={{ color: "red", marginLeft: "80px" }}>
                    This field is required
                  </span>
                )}
              </div>

              <div className="modal-content-footer">
                <div>
                  <button
                    type="Submit"
                    onClick={SubmitHandler1}
                    className="btn btn-primary"
                  >
                    <span>Login</span>
                    <ToastContainer />
                  </button>
                  <Button type="submit" className="btn" onClick={handleClose}>
                    <span>Cancel</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
