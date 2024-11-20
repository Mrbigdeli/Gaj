import Carousel from "react-multi-carousel";

const Brands = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/965-brand-136x69-1.png"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/683-brand-136x69-1.webp"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/965-brand-136x69-1.png"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/614-brand-136x69-1.webp"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/239-brand-136x69-1.png"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/305-brand-136x69-1.png"
          alt=""
        />
      </div>
      <div className="Home-Pge-MainDIV-Brands-itm1">
        <img
          src="https://babkala.shop/wp-content/uploads/921-brand-136x69-1.webp"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Brands;
