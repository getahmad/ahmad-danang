import JumbotronPages from "../../Components/Jumbotron/JumbotronPages";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const Blogs = (props) => {
  return (
    <>
      <Navbar />
      <JumbotronPages name="Blog" />
      <h1 className="text-center mt-5 mb-5">Noting</h1>
      <Footer />
    </>
  );
};

export default Blogs;
