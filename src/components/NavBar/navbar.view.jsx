import React from "react";
import User1 from "../../images/users/user-1.jpg";
import KAUSTlogo from "../../images/KAUST-logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-right mb-0">
          <li className="dropdown notification-list">
            <Link
              className="nav-link dropdown-toggle  waves-effect"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-bell noti-icon"></i>
              <span className="badge badge-danger rounded-circle noti-icon-badge">
                1
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-right">
                    <Link className="text-dark">
                      <small>Clear All</small>
                    </Link>
                  </span>
                  Notification
                </h5>
              </div>

              <div className="slimscroll noti-scroll">
                <Link className="dropdown-item notify-item active">
                  <div className="notify-icon">
                    <img
                      src={User1}
                      className="img-fluid rounded-circle"
                      alt=""
                    />{" "}
                  </div>
                  <p className="notify-details">Cristina Pride</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </Link>
              </div>
              <Link className="dropdown-item text-center text-primary notify-item notify-all">
                View all
                <i className="fi-arrow-right"></i>
              </Link>
            </div>
          </li>

          <li className="dropdown notification-list">
            <Link
              className="nav-link dropdown-toggle nav-user mr-0 waves-effect"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span className="pro-user-name ml-1">
                Account <i className="mdi mdi-chevron-down"></i>
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>

              <Link className="dropdown-item notify-item">
                <i className="fe-user"></i>
                <span>My Account</span>
              </Link>

              <Link className="dropdown-item notify-item">
                <i className="fe-settings"></i>
                <span>Settings</span>
              </Link>

              <Link className="dropdown-item notify-item">
                <i className="fe-lock"></i>
                <span>Lock Screen</span>
              </Link>

              <div className="dropdown-divider"></div>

              <Link to="/" className="dropdown-item notify-item">
                <i className="fe-log-out"></i>
                <span>Logout</span>
              </Link>
            </div>
          </li>
        </ul>

        <div className="logo-box pt-3">
          <Link to="/home" className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src={KAUSTlogo} alt="" height="128" />
            </span>
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="24" />
            </span>
          </Link>
          <Link to="/home" className="logo logo-light text-center">
            <span className="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height="16" />
            </span>
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="24" />
            </span>
          </Link>
        </div>

        <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
          <li>
            <button className="button-menu-mobile disable-btn waves-effect">
              <i className="fe-menu"></i>
            </button>
          </li>

          <li>
            <h4 className="page-title-main">Dashboard</h4>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NavBar;
