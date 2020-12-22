import ImgTalikasih from "../../Assets/images/kuylearn.png";

const TaliKasih = () => {
  return (
    <>
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
          <h3>KUYLEARN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi
            fugiat veritatis eos, nulla facere cupiditate nesciunt amet minima
            voluptatibus, tenetur magni deserunt earum iure quia dicta veniam
            ipsa nostrum.
          </p>
        </div>
      </div>
    </>
  );
};

export default TaliKasih;
