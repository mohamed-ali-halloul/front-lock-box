import { useHistory } from "react-router-dom";
import "./Acceuil.css";
import logos from "./layout/Locbox.png";
import SignIn from "./auth/SignIn";
const Acceuil = () => {
  const history = useHistory();
  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="acc">
      {" "}
      <div className="im1">
        <img src={logos} width={300} className="img1" />
      </div>
      <div className="d1">
        <h1 className="titre">Welcome to Lock Box </h1>
        <SignIn />
        <p>
          Don't have an account please <a onClick={handleSignUp}>SignUp</a>
        </p>
      </div>
    </div>
  );
};
export default Acceuil;
