const LoginByPass = () => {
    return(
        <div className="mainDIV-LoginByPass">
            <img src="https://babkala.shop/wp-content/uploads/bakala-logo-org-1.png" alt="" />
            <div className="mainDIV-LoginByPass-title">
                <h3>ورود / ثبت نام</h3>
            </div>
            <div className="mainDIV-LoginByPass-input">
                <label htmlFor="LoginByPass">شماره تماس یا ایمیل خود را وارد کنید</label>
                <input type="text" name="LoginByPass" id="" className="mainDIV-LoginByPass-text-input" placeholder="شماره تماس یا ایمیل خود را وارد کنید" />
                <input type="password" name="LoginByPass" id="" className="mainDIV-LoginByPass-text-input" placeholder="پسورد" />
                <input type="checkbox" name="" id="" />شرایط و قوانین استفاده از سرویس های فروشگاه اینترنتی باکالا را می پذیرم
            </div>
            <div>
                <button type="button">دریافت کد تایید</button>
            </div>
            <a href="http://"><p>ورود / ثبت نام با پسورد</p></a>
        </div>
    );
}

export default LoginByPass;