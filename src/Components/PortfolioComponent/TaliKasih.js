import { Link } from "react-router-dom";
import ImgTalikasih from "../../Assets/images/talikasih.png";
import Fade from "react-reveal/Fade";
import "./talikasih.css";

const TaliKasih = () => {
  return (
    <>
      <div className="row isi-project mt-4">
        <div className="isi-project col-lg-6">
          <Fade left>
            <Link to="portfolio/Tali Kasih" className="style-project-homepage">
              <img src={ImgTalikasih} alt="tali kasih" />
            </Link>
          </Fade>
        </div>
        <div className="isi-project2 col-lg-6">
          <Fade right>
            <Link to="portfolio/Tali Kasih" className="style-project-homepage">
              <h3>TALI KASIH</h3>
            </Link>
            <p className="content-isi">
              The platform connects fundraisers with donors and offers
              transparent and accountable fundraising, enabling users to launch
              crowdfunding campaigns or donate for social causes online. We uses
              technology to bring transparency and trust.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default TaliKasih;
