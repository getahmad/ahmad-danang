import { Link } from "react-router-dom";
import ImgMilanTv from "../../Assets/images/mlan-tv.png";
import Fade from "react-reveal/Fade";
import "./milantv.css";

const MilanTv = () => {
  return (
    <>
      <div className="row isi-project mt-5">
        <div className="isi-project1 col-lg-6 ">
          <Fade left>
            <Link to="portfolio/Milan TV" className="style-project-homepage">
              <h3>MILAN TV</h3>
            </Link>
            <p className="content-isi">
              Milan TV is a mini project to review a film. Some of the features
              in this application are user register / login, homepage to view
              all movies, detail pages, comment and rating, profile and
              watchlist.
            </p>
          </Fade>
        </div>
        <div className="isi-project col-lg-6">
          <Fade right>
            <Link to="portfolio/Milan TV" className="style-project-homepage">
              <img src={ImgMilanTv} alt="" />
            </Link>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default MilanTv;
