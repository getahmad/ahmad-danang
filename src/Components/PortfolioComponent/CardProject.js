import { Link } from "react-router-dom";
import "./CardProject.css";

const CardProject = (props) => {
  return (
    <>
      <Link to={`portfolio/${props.title}`} className="style-link-card" >
        <div className="card" style={{ width: "100%",marginBottom:"20px" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <button className="btn btn-light tech-stack">{props.stack1}</button>
            <button className="btn btn-light tech-stack ml-1 mr-1">
              {props.stack2}
            </button>
            <button className="btn btn-light tech-stack">{props.stack3}</button>
            <p className="card-text mt-4">{props.content}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProject;
