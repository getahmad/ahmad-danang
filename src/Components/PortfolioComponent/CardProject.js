import { Link } from "react-router-dom";
import "./CardProject.css";

const CardProject = (props) => {
  return (
    <>
      <Link to={`portfolio/${props.title}`} className="style-link-card">
        <div className="card" style={{ width: "100%", marginBottom: "20px" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <span>{props.stack1}</span>
            <span>{props.stack2}</span>
            <span>{props.stack3}</span>
            <p className="card-text mt-4">{props.content}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProject;
