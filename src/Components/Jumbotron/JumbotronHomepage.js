import ImgDanang from "../../Assets/images/danang.png";
import "./jumbotronHomepage.css";
import Resume from "../../Assets/resume-ahmaddanang.pdf"

const JumbotronHomepage = () => {
  return (
    <>
      <div className="jumbotron" id="home">
        <div
          className="container for-about"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            AHMAD<span> DANANG</span>
          </h1>
          <p>Frontend Developer Learner</p>
          <a href={Resume}>
            <button type="button" className="btn btn-cv">
              Resume
            </button>
          </a>
          <img src={ImgDanang} alt="ahmad danang" />
        </div>
      </div>
    </>
  );
};

export default JumbotronHomepage;
