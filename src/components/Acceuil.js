import { useHistory } from "react-router-dom";
import "./Acceuil.css";
import logos from "./layout/Locbox.png";
import illus from "./layout/illus.png";
import SignIn from "./auth/SignIn";
import { Image } from "antd";
const Acceuil = () => {
  const history = useHistory();


  return (
    <>
      {" "}
      <div className="acc">
        <div className="partie1">
          <div className="img1">
            <Image src={logos} width={300} preview={false} />
          </div>
          <div className="d1">
            <h1 className="titre">Welcome to Lock Box </h1>
            <SignIn />
           
          </div>
        </div>
        <div className="img2">
          <Image src={illus} className="imaaag2" preview={false} />
        </div>
      </div>
    </>
  );
};
export default Acceuil;
