import JumbotronPages from "../Jumbotron/JumbotronPages";
import IcBootstrap from "../../Assets/icon/Bootstrap.svg";
import IcReact from "../../Assets/icon/React.svg";
import IcNodeJs from "../../Assets/icon/nodejs.svg";
import IcMongo from "../../Assets/icon/mongodb.svg";
import IcExpress from "../../Assets/icon/express.svg";
import IcWeb from "../../Assets/icon/Web.svg";
import IcGithub from "../../Assets/icon/github.png";

import { Link } from "react-router-dom";
import SSHome from "../../Assets/images/staycation-home.png";
import SSBookingInform from "../../Assets/images/stayaction-bookinginform.png";
import SSDetail from "../../Assets/images/staycation-detail.png";
import SSBooking from "../../Assets/images/staycation-booking.png";
import SSLogin from "../../Assets/images/staycation-loginadmin.png";
import SSCompleted from "../../Assets/images/staycation-completed.png";
import SSAdmin from "../../Assets/images/staycation-admin.png";
import "./StaycationFull.css";

const StaycationFull = () => {
  return (
    <>
      <JumbotronPages name="Staycation" />
      <div className="container">
        <div className="desc-milantv">
          <div className="row mt-5 ">
            <div className="col-lg-12 mb-4">
              <h2 className="text-center ">Project Summary</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <p>
                Staycation is a website for someone to be able to take a
                vacation without thinking of finding a place to live close to
                where the vacation is located. Staycation applications to easily
                search for houses, hotels, and apartments through the website.{" "}
                <br />
                <strong>Features</strong>: Get All Item, Item Details, Booking
                Item, and Admin Panel
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="style-icon">
                <h4 className="mb-3">Tech Stack</h4>
                <img src={IcBootstrap} alt="ic-bootstrap" />
                <img src={IcReact} alt="ic-react" />
                <img src={IcNodeJs} alt="ic-node" />
                <img src={IcMongo} alt="ic-mongo" />
                <img src={IcExpress} alt="ic-express" />
                <h4 className="mb-3 mt-4">Link</h4>
                <a
                  href="https://staycationsite.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcWeb} alt="ic-bootstrap" />
                </a>
                <a
                  href="https://github.com/getahmad/staycation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcGithub} alt="ic-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 capture-staycation">
          <div className="col-lg-12">
            <h2 className="text-center mb-4">Screenshot</h2>
          </div>
          <div className="col-6  mb-3">
            <img src={SSHome} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSDetail} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSBookingInform} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSBooking} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSCompleted} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSAdmin} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSLogin} alt="" width="100%" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/portfolio">
          <button className="btn btn-back">Back </button>
        </Link>
      </div>
    </>
  );
};

export default StaycationFull;
