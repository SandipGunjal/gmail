import { Button } from "@mui/material";
import "./login.css";
import { auth } from "./Firebase";
import React from "react";
import { provider } from "./Firebase";
import { login } from "./userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://326219.selcdn.ru/albatoStatic/logos/gmail/original.png"
          alt=""
        />
      </div>
      <Button variant="contained" color="primary" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
