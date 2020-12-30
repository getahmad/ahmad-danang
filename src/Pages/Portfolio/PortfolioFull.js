import { Route, Switch,  } from "react-router-dom";
import MilantvFull from "../../Components/PortfolioComponent/MilantvFull";
import TalikasihFull from "../../Components/PortfolioComponent/TalikasihFull";
import UINomadsFull from "../../Components/PortfolioComponent/UINomadsFull";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const PortfolioFull = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <Route path="/portfolio/:Tali Kasih">
            <TalikasihFull />
          </Route>
          <Route path="/portfolio/:Milan TV">
            <MilantvFull/>
          </Route>
          <Route path="/portfolio/:UI Nomads">
            <UINomadsFull/>
          </Route>
        </Switch>
      <Footer />
    </>
  );
};

export default PortfolioFull;
