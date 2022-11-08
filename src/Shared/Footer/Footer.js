import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_footer">
                <h4>Services</h4>
                <ul className="services-list">
                  <li>Home Delivery</li>
                  <li>Hygenic Food</li>
                  <li>resonable price</li>
                  <li>16/7 support</li>
                  <li>Discount price</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Page Link</h4>

                <ul>
                  <li>
                    <Link as to={"/"} className="text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link as to={"/services"} className="text-decoration-none">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link as to={"/blog"} className="text-decoration-none">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link as to={"/myreviews"} className="text-decoration-none">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link as to={"/login"} className="text-decoration-none">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Enter Email Address"
                    />
                  </form>
                  <Button className="mt-2 btn btn-danger">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className="copyright">
                Copyright © 2022{" "}
                <Link as to={"/"}>
                  Cloud Kitchen
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /*  */
}
