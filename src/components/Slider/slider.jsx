// import { borderRadius, margin, width } from "@mui/system";
import { Slide } from "react-slideshow-image";

const Slider = (props) => {
  const divStyle = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "80vh",
    borderRadius: "25px",
    margin: "0px auto 0px",
  };
  const slideImages = [
    {
      url: `${props.srcOne}`,
    },
    {
      url: `${props.srcTwo}`,
    },
    {
      url: `${props.srcThree}`,
    },
  ];

  return (
    // <div className="slider-comp-container">
    //   <img src={props.srcOne} alt={props.altOne} />
    //   <img src={props.srcTwo} alt={props.altTwo} />
    //   <img src={props.srcThree} alt={props.altThree} />
    // </div>
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
