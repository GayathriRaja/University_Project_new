import React, { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [configOpen, setConfigOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  return (
    <>
      <div className="left-side-menu">
        <div className="slimscroll-menu">
          <div id="sidebar-menu">
            <ul className="metismenu mt-5" id="side-menu">
              <li className="menu-title">Navigation</li>
              <li>
                <Link to="/home">
                  <i className="mdi mdi-view-dashboard"></i>
                  <span> Home </span>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="mdi mdi-view-dashboard"></i>
                  <span> Dashboard </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setLanguageOpen(!languageOpen);
                  }}
                >
                  <i className="mdi mdi-view-dashboard"></i>
                  <span> Language </span>
                  <span
                    className="menu-arrow"
                    style={
                      languageOpen
                        ? { transform: "rotate( 90deg )" }
                        : { transform: "rotate( 0deg )" }
                    }
                  ></span>
                </Link>
                {languageOpen && (
                  <ul className="nav-second-level">
                    <li>
                      <Link to="/home">English</Link>
                    </li>
                    <li>
                      <Link to="/home">Arabic</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/home">
                  <i className="mdi mdi-view-dashboard"></i>
                  <span> History </span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setConfigOpen(!configOpen);
                  }}
                >
                  <i className="mdi mdi-view-dashboard"></i>
                  <span> Configuration </span>
                  <span
                    className="menu-arrow"
                    style={
                      configOpen
                        ? { transform: "rotate( 90deg )" }
                        : { transform: "rotate( 0deg )" }
                    }
                  ></span>
                </Link>
                {configOpen && (
                  <ul className="nav-second-level">
                    <li>
                      <Link to="/addgate">Add Gate</Link>
                    </li>
                    <li>
                      <Link to="/addvehicle">Add Vehicle</Link>
                    </li>
                    <li>
                      <Link to="/securitypersonal">Security Personnel</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
