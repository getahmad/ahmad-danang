import { Link } from "react-router-dom";
import ImgMilanTv from "../../Assets/images/mlan-tv.png";
import "./milantv.css";

const MilanTv = () => {
  return (
    <>
      <Link to="portfolio/Milan TV" className="style-project-homepage">
        <div className="row isi-project mt-5">
          <div
            className="isi-project1 col-lg-6 "
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <h3>MILAN TV</h3>
            <p className="content-isi">
              Milan TV is a mini project to review a film. Some of the features
              in this application are user register / login, homepage to view
              all movies, detail pages, comment and rating, profile and
              watchlist.
            </p>
          </div>
          <div
            className="isi-project col-lg-6"
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <img src={ImgMilanTv} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default MilanTv;
