import About from "../../Components/About/About";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import MilanTv from "../../Components/ProjectApps/TaliKasih";
import TaliKasih from "../../Components/ProjectApps/MilanTv";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import "./home.css";
import CardBlog from "../../Components/BlogComponent/CardBlog";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <div className="project" id="project">
        <div className="container">
          <div class="row-lg-12 head-project ">
            <h1 data-aos="flip-right">SELECTED PROJECTS.</h1>
            <hr />
          </div>

          <MilanTv />
          <TaliKasih />
        </div>
      </div>

      <div className="blog" id="blog">
        <div className="container">
          <div className="row isi-blog">
            <div className="note-blog col-lg-4">
              <h1 data-aos="flip-right">BLOG.</h1>
              <hr />
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                exercitationem, neque velit nisi dicta animi ipsam placeat,
                voluptatibus molestiae facilis, eius et voluptate cupiditate ex
                vero nihil sunt. Deleniti, amet?
              </p>
            </div>
            <CardBlog />

            <CardBlog />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
