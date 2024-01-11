import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Navigationbar from "./components/Navbar";
import Textform from "./components/Textbar";
import { signOut } from "firebase/auth";
import { auth } from "./components/firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function App() {
  const [isauth, setisauth] = useState(cookies.get("auth-token"));
  const signout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setisauth(false);
  };
  if (!isauth) {
    return <Login setisauth={setisauth} />;
  } else {
    return (
      <div>
        <BrowserRouter>
          <Navigationbar
            title="Text-Utils"
            about="About Us"
            setisauth={setisauth}
          />
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
