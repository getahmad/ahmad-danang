import { Link } from "react-router-dom";
import JumbotronPages from "../Jumbotron/JumbotronPages";
import NomadsCheckout from "../../Assets/images/nomads-checkout.png";
import NomadsDetail from "../../Assets/images/nomads-detail.png";
import NomadsHome from "../../Assets/images/nomads-homepage.png";
import NomadsSignin from "../../Assets/images/nomads-signin.png";
import NomadsSuccess from "../../Assets/images/nomads-success.png";
import NomadsTicket from "../../Assets/images/nomads-ticket.png";
import "./UINomadsFull.css";

const UINomadsFull = () => {
  return (
    <>
      <JumbotronPages name="UI Design Nomads" />
      <div className="container">
        <h2 className="text-center mb-5 mt-4">Screenshot</h2>
        <div className="row  style-img-nomads">
          <div className="col-6 mb-3">
            <img src={NomadsHome} alt="" />
          </div>
          <div className="col-6 mb-3">
            <img src={NomadsDetail} alt="" className="mb-3" />
            <img src={NomadsCheckout} alt="" />
          </div>
          <div className="col-6 mb-3">
            <img src={NomadsSignin} alt="" />
          </div>
          <div className="col-6 mb-3">
            <img src={NomadsSuccess} alt="" />
          </div>
          <div className="col-6">
            <img src={NomadsTicket} alt="" />
          </div>
        </div>

    

        <div className="d-flex justify-content-center">
          <Link to="/portfolio">
            <button className="btn btn-back">Back </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UINomadsFull;
