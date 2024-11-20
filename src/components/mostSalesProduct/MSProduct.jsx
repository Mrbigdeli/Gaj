import Carousel from "react-multi-carousel";

const MostProductSales = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
      <div className="Most-sales-Product-carousel">
        <img
          src="https://babkala.shop/wp-content/uploads/5-1-220x220.jpg"
          alt=""
        />
        <p>برس پاک سازی مدل L1319</p>
        <div className="Most-sales-Product-price">
          <h4>299 تومان</h4>
          <button className="Most-sales-Product-price-btn">add</button>
        </div>
      </div>
    </Carousel>
  );
};

export default MostProductSales;

