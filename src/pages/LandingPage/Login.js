import React, { useState, useEffect } from "react";
import Logo from "../../Assests/big/kaust-logo1.png";
import BackgroundImage from "../../Assests/big/kaust_web.jpg";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
const Login = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const alert = useAlert();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [loginDetails, setLoginDetails] = useState({
    // checked: false,
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Log in | KAU";
  }, []);

  const onChangeHandlerLogin = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const onChangeCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  // const onChangeHandlerEmail = (e) => {
  //   setEmail(e.targgoet.value);
  // };

  // const onChangeHandlerPassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // useEffect(() => {
  //   console.log("email:" + email);
  // }, [email]);
  // useEffect(() => {
  //   console.log("password:" + password);
  // }, [password]);
  // useEffect(() => {
  //   console.log("Checked:" + checked);
  // }, [checked]);

  const onClickHandlerLogIn = () => {
    // alert("loginDetails:" + loginDetails.email + " " + loginDetails.password);
    // alert("checked:" + checked);
    if (
      loginDetails.email === "loginadmin@kau.com" &&
      loginDetails.password === "Admin@1234" &&
      checked === true
    ) {
      //window.open("index.html")
      alert.success("Email ID and Password is correct");
      history.push("/home");
      return true;
    } else {
      alert.error("Wrong Email or Password !");
      console.log("wrong username or password!");
      return false;
    }
  };
  return (
    <div className="background-image">
      <div className="login-style">
        <div className="text-center">
          <img src={Logo} alt="" height="130" className="logo-light mx-auto" />
          <p className="text-muted mt-2 mb-4"></p>
        </div>
        <div className="card-design">
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <h4 className="text-uppercase mt-0" style={{ fontSize: "95%" }}>
                Sign In
              </h4>
            </div>
            <div id="Login"></div>

            {/* <form
                  action="index.html"
                  method="POST"
                  onSubmit="return checkLoginPass();"
                > */}
            <form>
              <div className="form-group mb-3">
                <label>Email address</label>
                <p></p>
                <input
                  className="form-control"
                  type="email"
                  id="emailaddress"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  required
                  placeholder="Enter your email"
                  onChange={onChangeHandlerLogin}
                  name="email"
                  value={loginDetails.email}
                />
              </div>

              <div className="form-group mb-3">
                <label>Password</label>
                <p></p>

                <input
                  className="form-control"
                  type="password"
                  required
                  id="password"
                  placeholder="Enter your password"
                  onChange={onChangeHandlerLogin}
                  name="password"
                  value={loginDetails.password}
                />
              </div>

              <div className="form-group mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="checkbox-signIn"
                    onChange={onChangeCheckbox}
                    checked={checked}
                  />
                  <label className="custom-control-label" for="checkbox-signIn">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="form-group mb-0 text-center">
                <button
                  className="btn btn-success btn-block"
                  id="goButton"
                  onClick={onClickHandlerLogIn}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* </form> */}

        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>
              <Link to="/forgot" className="text-white ml-1">
                <i className="fa fa-lock mr-1"></i>Forgot your password?
              </Link>
            </p>
            <p className="text-muted">
              Don't have an account?
              <Link to="/register" className="text-white ml-1">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
