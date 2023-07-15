import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navigationbar from "./components/Navbar";
import Textform from "./components/Textbar";
function App() {
  return (
    <div className="App">
      <Navigationbar title="Text-Utils" about="About Us" />
      <Alert alert="This is Alert" />

      <div className="container">
        <Textform heading="Enter Your Text Below" />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
