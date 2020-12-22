import ProfileImg from "../../Assets/images/about-profile.png"
import "./about.css"

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
            <img
              src={ProfileImg}
              alt="profile ahmad danang"
            />
          </div>
          <div
            className="col-md-12 col-lg-6 offset-lg-1 "
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <p>
              You can call me <strong>Danang</strong>. Born in Palembang, March
              22 1998. Graduated in 2019 from the State Polytechnic of Sriwijaya
              majoring in computer engineering. Now domicile in Banyuasin, South
              Sumatra. Currently studying frontend developer at Glints Academy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
