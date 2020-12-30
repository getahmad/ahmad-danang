import { Link } from "react-router-dom";
import JumbotronPages from "../Jumbotron/JumbotronPages"

const UINomadsFull = () => {
    return ( 
        <>
        <JumbotronPages name="UI Design Nomads"/>
        <h1 className="text-center mt-5 mb-5" >Not complete yet</h1>
        <div className="d-flex justify-content-center">
        <Link to="/portfolio">
          <button className="btn btn-back">Back </button>
        </Link>
      </div>
        </>
     );
}
 
export default UINomadsFull;