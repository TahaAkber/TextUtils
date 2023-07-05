import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import React from "react";

import Aboutus from "./component/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
