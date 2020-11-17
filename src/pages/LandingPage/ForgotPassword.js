import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/big/kaust-logo1.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "Reset Password | KAU";
  }, []);

  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickHandlerForgotPassword = () => {
    if (email === "loginadmin@kau.com") {
      //window.open("index.html")
      alert("Password is sent in mail successfully");
      return true;
    } else {
      alert("EmailID doesn't exist!!!!");
      return false;
    }
  };

  return (
    <div className="background-image">
      <div class="container login-style">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="text-center">
              <img src={Logo} alt="" height="130" class="logo-light mx-auto" />
              <p class="text-muted mt-2 mb-4"></p>
            </div>
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mb-4">
                  <h4
                    class="text-uppercase mt-0 mb-3"
                    style={{ fontSize: "97%", fontWeight: "600" }}
                  >
                    Reset Password
                  </h4>
                  <p
                    class="text-muted mb-0 font-13"
                    style={{
                      fontSize: "80%",
                      fontWeight: "500",
                      opacity: "0.7",
                    }}
                  >
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                </div>
                <form>
                  <div class="form-group mb-3">
                    <label for="emailaddress">Email address</label>
                    <input
                      class="form-control"
                      type="email"
                      id="emailaddress"
                      required
                      pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                      placeholder="Enter your email"
                      onChange={onChangeHandlerEmail}
                      value={email}
                    />
                  </div>

                  <div class="form-group mb-0 text-center">
                    <button
                      class="btn btn-primary btn-block"
                      type="submit"
                      onClick={onClickHandlerForgotPassword}
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Back to{" "}
            <Link to="/" class="text-white ml-1">
              <b>Log in</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
