import JumbotronPages from "../../Components/Jumbotron/JumbotronPages";
import CardProject from "../../Components/PortfolioComponent/CardProject";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import ImgTalikasi from "../../Assets/images/talikasih.png";
import ImgMilantv from "../../Assets/images/mlan-tv.png";
import ImgNomads from "../../Assets/images/ui-nomads.png";
import AOS from 'aos'
import "./portfolio.css";

const Portfolio = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <JumbotronPages name="Portfolio" />
      <div className="container mt-5">
        <div className="projects-portfolio">
          <div className="row">
            <div className="col-lg-4"  data-aos="zoom-out-up">
              <CardProject
             
                image={ImgTalikasi}
                title="Tali Kasih"
                stack1="Javascript"
                stack2="ReactJs"
                stack3="Bootstrap"
                content="The platform connects fundraisers with donors, enabling users to launch crowdfunding campaigns or donate for social causes online."
              />
            </div>
            <div className="col-lg-4" data-aos="zoom-out-up">
              <CardProject
                image={ImgMilantv}
                title="Milan TV"
                stack1="Javascript"
                stack2="ReactJs"
                stack3="Bootstrap"
                content="Milan TV is a movie review app, which can review a movie and can give a rating. can search by category or title"
              />
            </div>
            <div className="col-lg-4" data-aos="zoom-out-up">
              <CardProject
                image={ImgNomads}
                title="UI Nomads"
                stack1="UI Design"
                stack2="Figma"
                stack3="BWA"
                content="Nomads UI design, design for travelers, the result of completing course"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
