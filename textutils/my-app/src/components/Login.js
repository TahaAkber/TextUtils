import React from "react";
import { auth, provider } from "./firebase";
import { signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navigationbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signin = async () => {
    const result = await signInWithRedirect(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      {!user ? (
        <div>
          <h3>SignIn to continue</h3>
          <button onClick={signin}>Click to Login</button>
        </div>
      ) : (
        <Navigationbar />
      )}
    </div>
  );
}

export default Login;
