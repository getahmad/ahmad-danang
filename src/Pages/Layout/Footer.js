import ICInstagram from "../../Assets/icon/instagram.png"
import ICDribble from "../../Assets/icon/dribbble.png"
import ICLinkedin from "../../Assets/icon/linkedin.png"
import ICGithub from "../../Assets/icon/github.png"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="contact " id="contact">
        <h1>Get In Touch</h1>
        <div className="icon">
          <a href="https://www.instagram.com/ahmaddanang__/" target="_blank" rel="noreferrer">
            <img src={ICInstagram} alt="instagram" />
          </a>
          <a href="https://github.com/getahmad" target="_blank" rel="noreferrer">
            <img src={ICGithub} alt="github" />
          </a>
          <a href="https://dribbble.com/getahmad" target="_blank" rel="noreferrer"> 
            <img src={ICDribble} alt="dribbble" />
            <img src="" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-danang-85896513a/"
            target="_blank" rel="noreferrer"
          >
            <img src={ICLinkedin} alt="linkedin" />
          </a>
        </div>
      </div>

      <footer className="footer">&copy; Copyright 2020 | Ahmad Danang</footer>
    </>
  );
};

export default Footer;
