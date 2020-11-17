import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/big/kaust-logo1.png";

const Register = () => {
  const [checked, setChecked] = useState(false);
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [registerDetails, setRegisterDetails] = useState({
    // checked: false,
    fullname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Register | KAU";
  }, []);

  // const onChangeHandlerFullname = (e) => {
  //   setFullname(e.target.value);
  // };

  // const onChangeHandlerEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onChangeHandlerPassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const onChangeHandlerRegister = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  const onChangeCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const onClickHandlerSignUP = () => {
    // alert(
    //   "registerDetails:" +
    //     registerDetails.fullname +
    //     " " +
    //     registerDetails.email +
    //     " " +
    //     registerDetails.password
    // );
    // alert("checked:" + checked);

    if (
      registerDetails.fullname === "admin" &&
      registerDetails.email === "loginadmin@kau.com" &&
      registerDetails.password === "Admin@1234" &&
      checked === true
    ) {
      //window.open("index.html")
      alert("New Account created");
      return true;
    } else {
      alert("New Account Not created!!!");
      return false;
    }
  };

  // useEffect(() => {
  //   console.log("fullname:" + fullname);
  // }, [fullname]);

  // useEffect(() => {
  //   console.log("email:" + email);
  // }, [email]);

  // useEffect(() => {
  //   console.log("password:" + password);
  // }, [password]);

  // useEffect(() => {
  //   console.log("checked:" + checked);
  // }, [checked]);

  return (
    <div className="background-image">
      <div className="login-style">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="text-center">
              <a href="index.html" className="logo">
                <img
                  src={Logo}
                  alt=""
                  height="130"
                  className="logo-light mx-auto"
                />
              </a>
              <p className="text-muted mt-2 mb-4"></p>
            </div>
            <div className="card">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h4
                    className="text-uppercase mt-0"
                    style={{ fontSize: "95%" }}
                  >
                    Register
                  </h4>
                </div>
                <form>
                  <div style={{ fontSize: "95%", fontWeight: "500" }}>
                    <div className="form-group">
                      <label for="fullname">Full Name</label>
                      <input
                        className="form-control"
                        type="text"
                        id="fullname"
                        placeholder="Enter your name"
                        required
                        onChange={onChangeHandlerRegister}
                        value={registerDetails.fullname}
                        name="fullname"
                      />
                    </div>
                    <div className="form-group">
                      <label for="emailaddress">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        placeholder="Enter your email"
                        onChange={onChangeHandlerRegister}
                        value={registerDetails.email}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        required
                        id="password"
                        placeholder="Enter your password"
                        onChange={onChangeHandlerRegister}
                        value={registerDetails.password}
                        name="password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          required
                          id="checkbox-signup"
                          onChange={onChangeCheckbox}
                          value={checked}
                        />
                        <label
                          className="custom-control-label"
                          for="checkbox-signup"
                        >
                          I accept
                          <a href="javascript: void(0);" className="text-dark">
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0 text-center">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={onClickHandlerSignUP}
                    >
                      Sign Up
                    </button>
                  </div>
                  {/* </form> */}
                </form>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 text-center">
                <p className="text-muted">
                  Already have account?
                  <Link to="/" className="text-white ml-1">
                    <b>Sign In</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
