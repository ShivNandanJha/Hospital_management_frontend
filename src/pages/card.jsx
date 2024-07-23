import PropTypes from "prop-types";

const Card = ({ header, paragraph, imageSrc, backgroundColor,icon }) => {
  // Rest of the code

  Card.propTypes = {
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };
  return (
    <div
      className={`rounded-lg p-6 shadow-lg ${backgroundColor}`}
      style={{ maxWidth: "300px" }}
    >
      <div className = "flex flex-row ">
      <div className = "text-section w-[60%]">
          <div className="header flex-row gap-2 justify-center align-middle ">
            {icon}
          <h2 className="text-xl text-start font-bold mb-2">{header}</h2>
         </div>

          
          <p className="text-start text-gray-700 mb-4">{paragraph}</p>
        </div>
        <div className="img-section ">
          <img
            src={imageSrc}
            alt="Card Image"
            className=" w-[100%]  relative left-[25%] top-[90% ] "
          />
        </div>
      </div>

      {/* <div className="flex flex-col items-center">
        <img
          src={imageSrc}
          alt="Card Image"
          className=" mb-4 w-24 h-30 "
        />
        <h2 className="text-xl font-semibold mb-2">{header}</h2>
        <p className="text-center text-gray-700 mb-4">{paragraph}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Read More
        </button>
      </div> */}
    </div>
  );
};

export default Card;
