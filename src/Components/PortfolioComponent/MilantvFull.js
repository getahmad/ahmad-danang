import JumbotronPages from "../Jumbotron/JumbotronPages";
import IcBootstrap from "../../Assets/icon/Bootstrap.svg";
import IcReact from "../../Assets/icon/React.svg";
import IcWeb from "../../Assets/icon/Web.svg";
import IcGitlab from "../../Assets/icon/Gitlab.svg";
import { Link } from "react-router-dom";
import SSHome from "../../Assets/images/milan-carouselhome.png";
import SSMovies from "../../Assets/images/milan-allmovies.png";
import SSDetail from "../../Assets/images/milan-detail.png";
import SSRegister from "../../Assets/images/milan-register.png";
import SSLogin from "../../Assets/images/milan-login.png";
import SSProfile from "../../Assets/images/milan-profile.png";
import "./MIlanTvFull.css";

const MilantvFull = () => {
  return (
    <>
      <JumbotronPages name="Milan TV" />
      <div className="container">
        <div className="desc-milantv">
          <div className="row mt-5 ">
            <div className="col-lg-12 mb-4">
              <h2 className="text-center ">Project Summary</h2>
            </div>
            <div className="col-lg-6 mb-4">
              <p>
                Milan TV is a mini project for review a movies and you can add
                movies to your watchlist by register first.
              </p>
              <div className="row">
                <div className="col-lg-2 col-md-2"><strong>Role</strong></div>
                <div className="col-lg-10 col-md-10"> Frontend Developer</div>
                <div className="col-lg-2"><strong>Team</strong></div>
                <div className="col-lg-10">
                   3 Backend, 3 Frontend and 2 React Native
                </div>
                <div className="col-lg-2"><strong>Duration</strong></div>
                <div className="col-lg-10">2 Weeks</div>
                <div className="col-lg-2"><strong>Features</strong></div>
                <div className="col-lg-10">
                   Login/Register, Get All Movies,Detail Movie, Comment and
                  rating, profile, sort by category, search by title, and add
                  watchlist
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="style-icon">
                <h4 className="mb-3">Tech Stack</h4>
                <img src={IcBootstrap} alt="ic-bootstrap" />
                <img src={IcReact} alt="ic-react" />
                <h4 className="mb-3 mt-4">Link</h4>
                <a
                  href="http://mini-project-group-a.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcWeb} alt="ic-bootstrap" />
                </a>
                <a
                  href="https://gitlab.com/glintsxbinar_batch8-miniproject/team-a/teama-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={IcGitlab} alt="ic-react" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row style-ss-milantv mt-5">
          <div className="col-lg-12">
            <h2 className="text-center mb-4">Screenshot</h2>
          </div>
          <div className="col-6 mb-3">
            <img src={SSRegister} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSLogin} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSHome} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSMovies} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSDetail} alt="" width="100%" />
          </div>
          <div className="col-6 mb-3">
            <img src={SSProfile} alt="" width="100%" />
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

export default MilantvFull;
