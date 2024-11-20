// import Header from "../../components/Header/header";
import Story from "../../components/Story/story";
import Slider from "../../components/Slider/slider";
import MostProductSales from "../../components/mostSalesProduct/MSProduct";
import ProductList from "../../components/ProductList/ProductList";
import Brands from "../../components/Brands/Brands";

// import StorySecondType from "../../components/Story/story-typeTwo";
const Home = () => {
  return (
    <div className="Home-Pge-MainDIV">
      <div className="Home-Pge-MainDIV-StoryParent">
        <Story
          src="https://babkala.shop/wp-content/uploads/story-1.jpg"
          alt="هودی"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-2.jpg"
          alt="بوت مردانه"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-3.jpg"
          alt="دورس"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-4.jpg"
          alt="تیشرت"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-6.jpg"
          alt="جوراب"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-5.jpg"
          alt="کت و شلوار"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-7.jpg"
          alt="کفش زنانه"
        />
        <Story
          src="https://babkala.shop/wp-content/uploads/story-8.jpg"
          alt="کاموا"
        />
      </div>
      <div className="Home-Pge-MainDIV-bnr">
        <Slider
          srcOne="https://babkala.shop/wp-content/uploads/slide-1.webp"
          altOne="slider1"
          srcTwo="https://babkala.shop/wp-content/uploads/slide-2.webp"
          altTwo="slider2"
          srcThree="https://babkala.shop/wp-content/uploads/slide-4.webp"
          altThree="slider3"
        />
      </div>
      <div className="Home-Pge-MainDIV-product">
        <div className="Home-Pge-MainDIV-product-title">
          <h3>تخفیف‌های باورنکردنی باکالا</h3>
        </div>
        <MostProductSales />
      </div>
      <div className="Home-Pge-MainDIV-Advertising-banner">
        <div className="Home-Pge-MainDIV-Advertising-banner-itm">
          <img
            src="https://babkala.shop/wp-content/uploads/50354d178154927.webp"
            alt=""
          />
        </div>
        <div className="Home-Pge-MainDIV-Advertising-banner-itm">
          <img
            src="https://babkala.shop/wp-content/uploads/50354d178154928.webp"
            alt=""
          />
        </div>
        <div className="Home-Pge-MainDIV-Advertising-banner-itm">
          <img
            src="https://babkala.shop/wp-content/uploads/e24d84178154927.webp"
            alt=""
          />
        </div>
        <div className="Home-Pge-MainDIV-Advertising-banner-itm">
          <img
            src="https://babkala.shop/wp-content/uploads/5b1243178154927.webp"
            alt=""
          />
        </div>
      </div>
      <div className="Home-Pge-MainDIV-product-lst">
        <div className="Home-Pge-MainDIV-product-lst-title">
          <h3>پر فروش ترین محصولات</h3>
          <h5 className="Home-Pge-MainDIV-product-lst-title-h5">نمایش بیشتر</h5>
        </div>
        <div className="Home-Pge-MainDIV-product-lst-itms">
          <ProductList />
        </div>
      </div>
      <div className="Home-Pge-MainDIV-Brands">
        <div className="Home-Pge-MainDIV-Brands-title">
          <h3 className="Home-Pge-MainDIV-Brands-title-h3">
            برندهایی که دوست داریم
          </h3>
        </div>
        <div className="Home-Pge-MainDIV-Brands-itm">
          <Brands />
        </div>
      </div>
      <div className="Home-Pge-MainDIV-newsletter">
        <div className="Home-Pge-MainDIV-newsletter-title">
          <h3 className="Home-Pge-MainDIV-newsletter-title-h3">
            اولین کسی باشید که از تخفیفات و محصولات جدید مطلع می شوید!
          </h3>
        </div>
        <div className="Home-Pge-MainDIV-newsletter-itm">
          <input
            type="text"
            placeholder="پست الکترونیک"
            className="Home-Pge-MainDIV-newsletter-itm-input"
          />
          <button className="Home-Pge-MainDIV-newsletter-itm-btn">ارسال</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
