import React from "react";
import Aboutus from "./Aboutus";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>
        <button type="button">Home</button>
        <Login />
        <Signup />
      </div>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
