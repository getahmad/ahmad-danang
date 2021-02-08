import About from "../../Components/About/About";
import MilanTv from "../../Components/PortfolioComponent/TaliKasih";
import TaliKasih from "../../Components/PortfolioComponent/MilanTv";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import "./home.css";
import JumbotronHomepage from "../../Components/Jumbotron/JumbotronHomepage";
// import CardBlog from "../../Components/BlogComponent/CardBlog";
// import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Navbar />
      <JumbotronHomepage />
      <About />
      <div className="project" id="project">
        <div className="container">
          <div className="row-lg-12 head-project ">
            <h1>SELECTED PROJECTS.</h1>
            <hr />
          </div>
          <MilanTv />
          <TaliKasih />
        </div>
      </div>

      {/* <div className="blog" id="blog">
        <div className="container">
          <div className="row isi-blog">
            <div className="note-blog col-lg-4">
              <h1>BLOG.</h1>
              <hr />
              <Fade bottom>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione exercitationem, neque velit nisi dicta animi ipsam
                  placeat, voluptatibus molestiae facilis, eius et voluptate
                  cupiditate ex vero nihil sunt. Deleniti, amet?
                </p>
              </Fade>
            </div>

            <CardBlog />

            <CardBlog />
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Home;
