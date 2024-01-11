import Alert from "./Alert";
import About from "./About";
import Textform from "./Textbar";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function Navigationbar(props) {
  const signout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    props.setisauth(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="./">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div>
              <button onClick={signout} className="button">
                Signout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Alert alert="This is alert" />
      <div className="container">
        <Textform heading="Enter Your Text Below" />
      </div>
    </div>
  );
}

export default Navigationbar;
