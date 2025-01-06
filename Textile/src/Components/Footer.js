import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer py-5">
        <div className="container pt-md-5 pt-sm-4 pb-sm-2">
          <div className="row">
            <div className="col-lg-4">
              <a
                className="footer-logo d-flex align-items-center"
                href="index.html"
              >
                <span>Dress-Up</span>
              </a>
              <p className="mt-3">
               At Dress-up, we create custom clothes that fit your style. Our skilled tailors bring your fashion ideas to life with care and precision.
              </p>
              <div className="columns-2 mt-4">
                <ul className="social">
                  <li>
                    <a href="#facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#google">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#github">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-5">
              <div className="row">
                <div className="col-xl-5 col-6 column">
                  <h3 className="footer-heading">Quick Links</h3>
                  <ul className="footer-gd-16">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    {/* <li>
                      <a href="#blog">Blog Posts</a>
                    </li> */}
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5 col-6 column px-xxl-0">
                  <h3 className="footer-heading">Contact Info</h3>
                  <ul className="footer-contact-list">
                    <li className="">10001, 5th Avenue, #32841 block, India</li>
                    <li className="mt-2">
                      <a href="tel:+12 23456790">+91 8219025081</a>
                    </li>
                    <li className="mt-2">
                      <a href="mailto:info@example.com">info@dressup.com</a>
                    </li>
                    <li className="mt-2">
                      <a href="mailto:info@example.com">www.dressup.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-7 col-8 column mt-lg-0 mt-4">
              <h3 className="footer-heading">Opening Hours</h3>
              <ul className="list-footer-block">
                <li>
                  Monday
                  <span>9:00 - 18:00</span>
                </li>
                <li>
                  Tuesday
                  <span>10:00 - 19:00</span>
                </li>
                <li>
                  Wednesday
                  <span>8:00 - 17:00</span>
                </li>
                <li>
                  Thursday
                  <span>10:00 - 19:00</span>
                </li>
                <li>
                  Friday
                  <span>10:00 - 19:00</span>
                </li>
                <li>
                  Saturday
                  <span>10:00 - 19:00</span>
                </li>
                <li>
                  Sunday
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="below-section text-center pt-4 mt-5">
            <p className="copy-text">
              &copy; 2024 Dress-Up. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
