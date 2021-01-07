import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import JumbotronPages from "../Jumbotron/JumbotronPages";
import IcBootstrap from "../../Assets/icon/Bootstrap.svg";
import IcReact from "../../Assets/icon/React.svg";
import IcWeb from "../../Assets/icon/Web.svg";
import IcGitlab from "../../Assets/icon/Gitlab.svg";
import SSlogin from "../../Assets/images/talikasih-login.png";
import SSregister from "../../Assets/images/talikasih-register.png";
import SSHome from "../../Assets/images/talikasih-homepage.png";
import SSDiscover from "../../Assets/images/talikasih-discover.png";
import SSCategory from "../../Assets/images/talikasih-category.png";
import SSSearch from "../../Assets/images/talikasih-search.png";
import SSProfile from "../../Assets/images/talikasih-profile.png";
import SSCreate from "../../Assets/images/talikasih-create.png";
import SSDetail from "../../Assets/images/talikasih-detail.png";
import SSDonate from "../../Assets/images/talikasih-donate.png";
import "./TalikasihFull.css";

const TalikasihFull = (props) => {
  return (
    <>
      <JumbotronPages name="Tali Kasih" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <ReactPlayer
              url="https://youtu.be/G2O4I1yStFU"
              playing={true}
              width="100%"
            />
          </div>
          <div className="col-lg-6 desc-content">
            <h2 className="text-center mb-3 mt-4">Project Summary</h2>
            <p>
              Tali Kasih is the operator platform of an online fundraising and
              donation platform intended to facilitate crowdfunding developed by
              Glints Batch 8 developers that believe in making changes towards
              good causes.
            </p>
            <div className="row">
              <div className="col-2">
                <strong>Role</strong>
              </div>
              <div className="col-10"> Frontend Developer</div>
              <div className="col-2">
                <strong>Team</strong>
              </div>
              <div className="col-10">3 Backend, 3 Frontend and 2 Mobile</div>
              <div className="col-2">
                <strong>Duration</strong>
              </div>
              <div className="col-10"> 4 Weeks</div>
              <div className="col-2">
                <strong>Features</strong>
              </div>
              <div className="col-10">
                Login/Register, Discover Campaign, Create Campaign, Donation,
                Update Campaign, Filter by category, search by title and Admin
                Panel to confirm donation
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="style-icon">
              <h4 className="mb-3">Tech Stack</h4>
              <img src={IcBootstrap} alt="ic-bootstrap" />
              <img src={IcReact} alt="ic-react" />
              <h4 className="mb-3 mt-4">Link</h4>
              <a
                href="https://talikasih-08.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={IcWeb} alt="ic-bootstrap" />
              </a>
              <a
                href="https://gitlab.com/glintsxbinar_batch8-finalproject/talikasih/talikasih-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <img src={IcGitlab} alt="ic-react" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 carousel-talikasih mt-4">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators"></ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={SSregister} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Register</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSlogin} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>login</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSHome} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Homepage</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSDiscover} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Discover All</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSCategory} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Category</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSSearch} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Search</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSProfile} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Profile</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSCreate} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Create Campaign</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSDetail} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Detail Campaign</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={SSDonate} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Donation</h5>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
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

export default TalikasihFull;
