import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { onNameChange,onPasswordChange,onLogIn,onCloseModal } from "../Features/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const StyledModal=styled.div`

    width: 400px;
	height: 400px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	position: fixed;
	left: calc(50% - 200px);
	top: calc(50% - 200px);
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 20px;
    align-items:center,
    justify-content:center,

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 3px;
    align-self:center;
  }

  .log-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .log-button:hover {
    background-color: #0056b3;
  }

  .close-button {
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color:black;
    position:absolute;
    top:0;
    right:5px;
    font-size:1.5rem;
  }

  .close-button:hover{
    text-shadow: 0 0 20px #333;
  }

`


const LoginModal = () => {
  
const dispatch = useDispatch();

const errorMessage=useSelector((state:RootState)=>state.user.errorMessage);

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
   dispatch(onNameChange(e.target.value));
  };
  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
   dispatch(onPasswordChange(e.target.value));
  };

  const handleClose=()=>{
      dispatch(onCloseModal())
  }

  const handleLogIn=()=>{
      dispatch(onLogIn())
  }


  return (
   
      <StyledModal>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleNameChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handlePasswordChange}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button className="log-button" onClick={handleLogIn}>LogIn</button>
        <button className="close-button" onClick={handleClose}>X</button>
      </StyledModal>
   
  );
  
};

export default LoginModal;
