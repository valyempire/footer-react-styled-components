import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFax,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="parag">
          <p style={{ textAlign: "left", marginRight: "auto" }}>
            Get connected with us on social networks:
          </p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.google.com" target="_blank">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Company Name</p>
          <p>
            Here you can use rows and columns to organise your footer content.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="col">
          <p>Products</p>
          <p>MDBootstrap</p>
          <p>MDWordPress</p>
          <p>BrandFlow</p>
          <p>Bootstrap Angular</p>
        </div>
        <div className="col">
          <p>Useful Links</p>
          <p>Your Account</p>
          <p>Become an Affiliate</p>
          <p>Shipping Rates</p>
          <p>Help</p>
        </div>
        <div className="col">
          <p>Contact</p>
          <p className="contact-info">
            <FontAwesomeIcon icon={faHouse} />{" "}
            <span style={{ marginLeft: "5px" }}>New York, NY 10012, US</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:0123456788">+01 234 567 88</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faFax} />{" "}
            <a href="fax:0123456789">+01 234 567 89</a>
          </p>
        </div>
      </div>
      <div className="rights"> ©2020 Copyright: React Playground</div>
    </footer>
  );
};
