import "./App.css";
import About from "./components/About";
import Navigationbar from "./components/Navbar";
import Textform from "./components/Textbar";
function App() {
  return (
    <div className="App">
      <Navigationbar title="Text-Utils" about="About Us" />
      <div className="container">
        {/* <Textform heading="Enter Your Text Below" /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
