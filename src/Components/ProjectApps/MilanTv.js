import ImgMilanTv from "../../Assets/images/kuylearn.png";
import "./milantv.css";

const MilanTv = () => {
  return (
    <>
      <div className="row isi-project mt-5">
        <div
          className="isi-project1 col-lg-6 "
          data-aos="fade-right"
          data-aos-offset="320"
          data-aos-easing="ease-in-sine"
        >
          <h3>MILAN TV</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi
            fugiat veritatis eos, nulla facere cupiditate nesciunt amet minima
            voluptatibus, tenetur magni deserunt earum iure quia dicta veniam
            ipsa nostrum.
          </p>
        </div>
        <div
          className="isi-project col-lg-6"
          data-aos="fade-right"
          data-aos-offset="320"
          data-aos-easing="ease-in-sine"
        >
          <img src={ImgMilanTv} alt="" />
        </div>
      </div>
    </>
  );
};

export default MilanTv;
