import "./JumbotronPages.css"

const JumbotronPages = (props) => {
  return (
    <>
      <div className="jumbotron-pages">
        <h1 className="heading-pages">{props.name}</h1>
      </div>
    </>
  );
};

export default JumbotronPages;
