import ImgDanang from "../../Assets/images/danang.png";
import "./jumbotronHomepage.css";
import Resume from "../../Assets/resume-ahmaddanang.pdf";
import Fade from "react-reveal/Fade";
import AksenJumbotron from "../../Assets/icon/AksenJumbotron.svg";

const JumbotronHomepage = () => {
  return (
    <>
      <div className="jumbotron" id="home">
        <img src={AksenJumbotron} alt="" className="style-aksen-1" />

        <div className="container for-about">
          <Fade bottom>
            <h1>
              AHMAD<span> DANANG</span>
            </h1>

            <p>Frontend Developer Learner</p>
          </Fade>
          <Fade bottom delay={300}>
            <a href={Resume}>
              <button type="button" className="btn btn-cv">
                Resume
              </button>
            </a>
          </Fade>
          <img src={AksenJumbotron} alt="" className="style-aksen-2" />
          <Fade bottom delay={200}>
            <img src={ImgDanang} alt="ahmad danang" />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default JumbotronHomepage;
