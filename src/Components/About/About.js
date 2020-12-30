import ProfileImg from "../../Assets/images/about-profile.png";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about container" id="about">
        <h1 data-aos="flip-right">ABOUT.</h1>
        <hr />
        <div className="row konten1 ">
          <div
            className="col-lg-5 col-md-12"
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <img src={ProfileImg} alt="profile ahmad danang" />
          </div>
          <div
            className="col-md-12 col-lg-6 offset-lg-1 "
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <p>
              This is Ahmad Danang. He is a person who has a high desire to
              learn and currently very motivated to explore his abilities by
              taking new opportunities to start a career as a Front End
              Developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
