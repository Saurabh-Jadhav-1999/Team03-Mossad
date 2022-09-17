import * as React from "react";

import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../slices/loginSlice";
import LoginIcon from "@mui/icons-material/Login";

async function loginUser(credentials) {
  try {
    const email = credentials.inputEmail;
    const password = credentials.inputPassword;
   
    const response = await axios.post(
      "https://hotelbooking-backend.herokuapp.com/login",

      {
        email,
        password,
      }
    );
      console.log("response",response);
    return response.data;
  } catch (error) {
    console.log(error, "error from loginuser");
  }
}



const failMsg = () => toast("Login Failed ");

export default function Login() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setTok] = useState();
  const [isValid, setIsValid] = useState({
    email: true,

    password: true,
  });

  const inputPasswordHandler = (event) => {
    if (event.target.value.trim().length == 0) {
      setIsValid({ ...isValid, password: false });
    } else {
      setIsValid({ ...isValid, password: true });
      setInputPassword(event.target.value);
    }
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (inputPassword && inputEmail) {
      const token = await loginUser({
        inputEmail,
        inputPassword,
      });
      if (!token) {
        failMsg();
      } else {
        console.log(token,"token from login")
        setTok(token);
        localStorage.setItem("token", token["x-auth-token"]);
        localStorage.setItem("name",token['user_name']);
        dispatch(setToken({ token }));
     
        toast.success("Login Successful");
      }
    }
  };

  const inputEmailHandler = (event) => {
    if (event.target.value.trim().length == 0) {
      setIsValid({ ...isValid, email: false });
    } else {
      setIsValid({ ...isValid, email: true });
      setInputEmail(event.target.value);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <LoginIcon />
      </Button>
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
            <form className="ant-form" onSubmit={SubmitHandler}>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="ant-form-item-required">Email:</label>
                </div>
                <input
                  type="email"
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
                  type="password"
                  className="ant-input"
                  // value={inputPassword}
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
                  <Button
                    type="submit"
                    variant="contained"
                    className="btn btn-primary"
                  >
                    <span>Login</span>
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="contained"
                    type="submit"
                    className="btn"
                    onClick={handleClose}
                  >
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
