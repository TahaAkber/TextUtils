import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navigationbar from "./components/Navbar";
import Textform from "./components/Textbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar title="Text-Utils" about="About Us" />
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
