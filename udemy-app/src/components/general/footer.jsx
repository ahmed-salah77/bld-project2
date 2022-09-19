import React from "react";
import "../../css/footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="_footer">
        <div className="links-and-lang-container">
          <ul className="unstyled-list link-column">
            <li>
              <a href="example.com">
                <span>Udemy Business</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Teach on Udemy</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Get the app</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>About us</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Contact us</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a href="example.com" className="">
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a href="example.com" className="">
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="example.com"> 
                <span>Help and Support</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Affiliate</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Investors</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a href="example.com" className="">
                <span>Terms</span>
              </a>
            </li>
            <li>
              <a href="example.com" className="">
                <span>Privacy policy</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Cookie setting</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Sitemap</span>
              </a>
            </li>
            <li>
              <a href="example.com">
                <span>Accessibility statement</span>
              </a>
            </li>
          </ul>
        <div className="language-selector-container">
            <button type="button" className="lang-btn">
            <span className="fa-solid fa-globe"></span><span >English</span>
            </button>
        </div>
        </div>
        <div className="logo-and-copyright">
            <div className="udemy-logo">
                <img src="images/logo-udemy-inverted.svg" alt="udemy logo" />
            </div>
            <div className="copy-right-txt">
                © 2022 Udemy, Inc.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
