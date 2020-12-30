import { Link } from "react-router-dom";
import ImgTalikasih from "../../Assets/images/talikasih.png";
import "./talikasih.css";

const TaliKasih = () => {
  return (
    <>
      <Link to="portfolio/Tali Kasih" className="style-project-homepage">
        <div className="row isi-project mt-4">
          <div
            className="isi-project col-lg-6"
            data-aos="fade-right"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <img src={ImgTalikasih} alt="" />
          </div>
          <div
            className="isi-project2 col-lg-6"
            data-aos="fade-left"
            data-aos-offset="320"
            data-aos-easing="ease-in-sine"
          >
            <h3>TALI KASIH</h3>
            <p className="content-isi">
              The platform connects fundraisers with donors and offers
              transparent and accountable fundraising, enabling users to launch
              crowdfunding campaigns or donate for social causes online. We uses
              technology to bring transparency and trust.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TaliKasih;
