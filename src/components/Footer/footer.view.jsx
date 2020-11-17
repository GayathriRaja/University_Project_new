import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">2019 - 2020 &copy; Page by KAU, SA.</div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-sm-block">
                <Link to="/home">About Us</Link>
                <Link to="/home">Help</Link>
                <Link to="/home">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
