import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState,props } from 'react';
import './Login.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputEmail, setInputEmail] = useState();
  const [inputPassword,setInputPassword]=useState();

  const [isValid,setIsValid]=useState({

    email:true,
 
   password:true
  })
  
  const inputPasswordHandler=(event)=>{
    setInputPassword(event.target.value);
    if(event.target.value.trim().length===0){
      setIsValid({...isValid,password:false})

    }
    else{
      setIsValid({...isValid,password:true})
    }
  }
  
  const inputEmailHandler=(event)=>{
    setInputEmail(event.target.value);
    if(event.target.value.trim().length===0){
      setIsValid({...isValid,email:false})

    }
    else{
      setIsValid({...isValid,email:true})
    }
  }
  
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
            <form className="ant-form"  >
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
                  {isValid.email?"":<span style={{color:"red",marginLeft:"80px"}}>This field is required</span>}
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
                  {isValid.password?"":<span style={{color:"red",marginLeft:"80px"}}>This field is required</span>}
              </div>
           
              <div className="modal-content-footer">
                <div>
                  <Button type="submit" className="btn" onClick={handleClose}>
                    <span>Cancel</span>
                  </Button>
                  <button
                    type="Submit"
                    className="btn btn-primary"
                 
                  >
                    <span>OK</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
