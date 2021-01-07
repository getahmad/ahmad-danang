import ProfileImg from "../../Assets/images/about-profile.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about container" id="about">
        <Flip left>
          <h1>ABOUT.</h1>
          <hr />
        </Flip>
        <div className="row konten1 ">
          <div className="col-lg-5 col-md-12">
            <Fade left>
              <img src={ProfileImg} alt="profile ahmad danang" />
            </Fade>
          </div>
          <div className="col-md-12 col-lg-6 offset-lg-1 ">
            <Fade right>
              <p>
                This is Ahmad Danang. He is a person who has a high desire to
                learn and currently very motivated to explore his abilities by
                taking new opportunities to start a career as a Front End
                Developer.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
