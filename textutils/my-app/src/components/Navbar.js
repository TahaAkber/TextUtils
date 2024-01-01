import Alert from "./Alert";
import Textform from "./Textbar";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Extranavbar from "./Extranavbar";
function Navigationbar(props) {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <Link to="/login" className="navbar-brand">
          Login
        </Link>
      ) : (
        <>
          <Extranavbar props={props} />
        </>
      )}
      <Alert alert="This is alert" />
      <div className="container">
        <Textform heading="Enter Your Text Below" />
      </div>
    </div>
  );
}

export default Navigationbar;
