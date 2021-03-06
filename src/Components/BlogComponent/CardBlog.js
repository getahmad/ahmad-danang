import BlogImg from "../../Assets/images/blog1.png";
import Fade from "react-reveal/Fade";
import "./cardblog.css";

const CardBlog = () => {
  return (
    <>
      <div className="content-blog col-lg-4">
        <Fade bottom>
          <div className="card">
            <img src={BlogImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default CardBlog;
