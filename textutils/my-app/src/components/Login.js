import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navigationbar from "./Navbar";
import Cookies from "universal-cookie";
import "../style/style.css";
const cookies = new Cookies();
function Login(props) {
  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    props.setisauth(true);
  };
  return (
    <div className="box">
      <div className="login">
        <h3>Sign In to continue</h3>
        <button onClick={signin}>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
