import BrandImg from "../../Assets/images/brand.png";
import BrandImg2 from "../../Assets/images/brand2.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-background">
      <nav className="navbar navbar-expand-lg navbar-light transparent container">
        <a className="navbar-brand" href="/">
          <img
            className="navbar-brand1"
            src={BrandImg2}
            alt="brand-name-ahmad"
          />
          <img className="navbar-brand2" src={BrandImg} alt="" />
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
