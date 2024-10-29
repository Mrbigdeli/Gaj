import Story from "../../components/Story/story";
import Slider from "../../components/Slider/slider";
import MostProductSales from "../../components/mostSalesProduct/MSProduct";
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
      <Slider
        srcOne="https://babkala.shop/wp-content/uploads/slide-1.webp"
        altOne="slider1"
        srcTwo="https://babkala.shop/wp-content/uploads/slide-2.webp"
        altTwo="slider2"
        srcThree="https://babkala.shop/wp-content/uploads/slide-4.webp"
        altThree="slider3"
      />
      <div className="Home-Pge-MainDIV-product">
        <div className="Home-Pge-MainDIV-product-title">
          <h3>تخفیف‌های باورنکردنی باکالا</h3>
        </div>
        <MostProductSales />
      </div>
      {/* <StorySecondType
        src="https://babkala.shop/wp-content/uploads/story-1.jpg"
        alt="هودی"
      /> */}
    </div>
  );
};
export default Home;
