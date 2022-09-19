import { useEffect } from "react";
import backgroundImage from "../images/bg.svg";

const Contact = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#contact").classList.add("active");
  }, []);

  return (
    <div className="contact-card">
      <div className="contact-icons">
        <a href="https://github.com/haseeb-shoukat">
          <i className="fa fa-github contact-icon" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <i className="fa fa-facebook contact-icon" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <i className="fa fa-instagram contact-icon" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <i className="fa fa-linkedin contact-icon" aria-hidden="true"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <i className="fa fa-twitter contact-icon" aria-hidden="true"></i>
        </a>
      </div>
      <div class="contact-address">
        <p>Knock-Offs</p>
        <p>NM 87131, Albuquerque, New York</p>
      </div>
    </div>
  );
};

export default Contact;
