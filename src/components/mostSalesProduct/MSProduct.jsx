import Carousel from "react-multi-carousel";

const MostProductSales = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <h5>برس پاک سازی</h5>
      </div>
      <div className="Most-sales-Product-carousel">Item 2</div>
      <div className="Most-sales-Product-carousel">Item 3</div>
      <div className="Most-sales-Product-carousel">Item 4</div>
      <div className="Most-sales-Product-carousel">Item 5</div>
      <div className="Most-sales-Product-carousel">Item 6</div>
      <div className="Most-sales-Product-carousel">Item 7</div>
    </Carousel>
  );
};

export default MostProductSales;
