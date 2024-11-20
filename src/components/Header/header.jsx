import SearchBar from "../SearchBar/SearchBar";
import { FaUserLarge } from "react-icons/fa6";

import DialogComp from "../../components/Dialog/Dialog";
const Header = () => {
  return (
    <div className="Header-Comp-Parent">
      <div className="Header-Comp-Parent-TopPart">
        <div
          className="Header-Comp-Parent-TopPart-Parts"
          id="Header-Comp-Parent-TopPart-right"
        >
          <img
            src="/1st-Logo.png"
            alt="my-logo"
            className="Header-Comp-Parent-TopPart-right-logoIMG"
          />
          <SearchBar />
        </div>
        <div
          className="Header-Comp-Parent-TopPart-Parts"
          id="Header-Comp-Parent-TopPart-left"
        >
          <div className="Header-Comp-TopPart-itm-one">
            <DialogComp
              title="ثبت نام"
              ButtonNO="1"
              labelOne="accept"
              mainButtonClass="Header-Comp-TopPart-h4-one"
              mainButtonLabel="ورود/ثبت‌نام"
              WhichPage="header"
              whatPart="PartSignIN-UP"
            />
          </div>
          <div className="Header-Comp-TopPart-itm-two">
            <DialogComp
              title="hi"
              ButtonNO="1"
              labelOne="accept"
              mainButtonClass="Header-Comp-TopPart-h4-two"
              mainButtonLabel="سبدخرید"
              WhichPage="header"
              whatPart="PartCart"
            />
          </div>
        </div>
      </div>
      <div className="Header-Comp-Parent-bottomPart">
        <div className="Header-Comp-Parent-bottomPart-right">
          <div className="Header-Comp-Parent-bottomPart-right-items">
            دسته بندی
          </div>
          <div className="Header-Comp-Parent-bottomPart-right-items">
            پرسش متداول
          </div>
          <div className="Header-Comp-Parent-bottomPart-right-items">
            پیگیری سفارشات
          </div>
          <div className="Header-Comp-Parent-bottomPart-right-items">
            تماس با ما
          </div>
          <div className="Header-Comp-Parent-bottomPart-right-items">
            دموی خودرو
          </div>
        </div>
        <div className="Header-Comp-Parent-bottomPart-left"></div>
      </div>
      <div className="Header-Comp-Parent-category-box"></div>
    </div>
  );
};

export default Header;

<h4 className="Header-Comp-TopPart-h4">
  {/* window.location.replace("/profile");  */}
  ورود
  <FaUserLarge className="Header-Comp-TopPart-icn" />
</h4>;
