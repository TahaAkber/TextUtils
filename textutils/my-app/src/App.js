import "./App.css";
import Navigationbar from "./components/Navbar";
import Textform from "./components/Textbar";
function App() {
  return (
    <div className="App">
      <Navigationbar title="Text-Utils" about="About Us" />
      <div className="container">
        <Textform heading="Enter Your Text Below" />
      </div>
    </div>
  );
}

export default App;
