import JumbotronPages from "../../Components/Jumbotron/JumbotronPages";
import CardProject from "../../Components/PortfolioComponent/CardProject";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import ImgTalikasi from "../../Assets/images/talikasih.png";
import ImgMilantv from "../../Assets/images/mlan-tv.png";
import Staycation from "../../Assets/images/staycation.png";
import ImgNomads from "../../Assets/images/ui-nomads.png";
import Fade from "react-reveal/Fade";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <JumbotronPages name="Portfolio" />
      <div className="container mt-5">
        <div className="projects-portfolio">
          <div className="row">
            <div className="col-lg-4">
              <Fade bottom>
                <CardProject
                  image={ImgTalikasi}
                  title="Tali Kasih"
                  stack1="Javascript"
                  stack2="ReactJs"
                  stack3="Bootstrap"
                  content="The platform connects fundraisers with donors, enabling users to launch crowdfunding campaigns or donate for social causes online."
                />
              </Fade>
            </div>
            <div className="col-lg-4">
              <Fade bottom delay={150}>
                <CardProject
                  image={Staycation}
                  title="Staycation"
                  stack1="ReactJs"
                  stack2="ExpressJs"
                  stack3="Mongodb"
                  content="Staycation applications to easily search for houses, hotels, and apartments through the website."
                />
              </Fade>
            </div>
            <div className="col-lg-4">
              <Fade bottom delay={100}>
                <CardProject
                  image={ImgMilantv}
                  title="Milan TV"
                  stack1="Javascript"
                  stack2="ReactJs"
                  stack3="Bootstrap"
                  content="Milan TV is a movie review app, which can review a movie and can give a rating. can search by category or title"
                />
              </Fade>
            </div>

            <div className="col-lg-4">
              <Fade bottom delay={150}>
                <CardProject
                  image={ImgNomads}
                  title="UI Nomads"
                  stack1="UI Design"
                  stack2="Figma"
                  stack3="BWA"
                  content="Nomads UI design, design for travelers, the result of completing course"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
