import ImgDanang from "../../Assets/images/danang.png";
import "./jumbotron.css";

const Jumbotron = () => {
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
          <a href="assets/images/cv-danang.pdf" target="_blank">
            <button type="button" className="btn btn-cv">
              Curriculum Vitae
            </button>
          </a>
          <img src={ImgDanang} alt="ahmad danang" />
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
