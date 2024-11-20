import { useState } from "react";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isphoneNumber, setIsPhoneNumber] = useState(true);
  const inputChecker = (input) => {
    if (isNaN(input)) {
      setEmail(input);
      setIsPhoneNumber(false);
      // console.log(isphoneNumber);
    } else if (!isNaN(input)) {
      setPhoneNumber(input);
      setIsPhoneNumber(true);
      // console.log(isphoneNumber);
    }
  };
  const codeGetButtom = () => {
    if (isphoneNumber) {
      let phNum = phoneNumber.split("");
      var len = phNum.length;
      if (len == 11) {
        if (phNum[0] == "0") {
          if (phNum[1] == "9") {
            console.log("Correct");
            // send phone number to server
          } else {
            console.log("wrongThree");
          }
        } else {
          console.log("wrongTwo");
        }
      } else {
        console.log("wrongOne");
      }
    } else if (!isphoneNumber) {
      console.log("hgddfg");
    }
  };
  return (
    <div className="mainDIV-loginForm">
      <img
        src="https://babkala.shop/wp-content/uploads/bakala-logo-org-1.png"
        alt=""
      />
      <div className="mainDIV-loginForm-title">
        <h3>ورود / ثبت نام</h3>
      </div>
      <div className="mainDIV-loginForm-input">
        <label htmlFor="loginForm">شماره تماس یا ایمیل خود را وارد کنید</label>
        <input
          type="text"
          name="loginForm"
          id=""
          value={isphoneNumber ? phoneNumber : email}
          onChange={(e) => inputChecker(e.target.value)}
          className="mainDIV-loginForm-text-input"
          placeholder="شماره تماس یا ایمیل خود را وارد کنید"
        />
        {isphoneNumber}
        <input type="checkbox" name="" id="" />
        شرایط و قوانین استفاده از سرویس های فروشگاه اینترنتی باکالا را می پذیرم
      </div>
      <div>
        <button
          className="mainDIV-loginForm"
          type="button"
          onClick={(e) => codeGetButtom(e)}
        >
          دریافت کد تایید
        </button>
      </div>
      <a href="http://">
        <p>ورود / ثبت نام با پسورد</p>
      </a>
    </div>
  );
};

export default SignIn;
