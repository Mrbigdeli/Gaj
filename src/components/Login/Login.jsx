const Login = () => {
    return(
        <div className="mainDIV-loginForm">
            <img src="https://babkala.shop/wp-content/uploads/bakala-logo-org-1.png" alt="" />
            <div className="mainDIV-loginForm-title">
                <h3>ورود / ثبت نام</h3>
            </div>
            <div className="mainDIV-loginForm-input">
                <label htmlFor="loginForm">شماره تماس یا ایمیل خود را وارد کنید</label>
                <input type="text" name="loginForm" id="" className="mainDIV-loginForm-text-input" placeholder="شماره تماس یا ایمیل خود را وارد کنید" />
                <input type="checkbox" name="" id="" />شرایط و قوانین استفاده از سرویس های فروشگاه اینترنتی باکالا را می پذیرم
            </div>
            <div>
                <button type="button">دریافت کد تایید</button>
            </div>
            <a href="http://"><p>ورود / ثبت نام با پسورد</p></a>
        </div>
    );
}

export default Login;