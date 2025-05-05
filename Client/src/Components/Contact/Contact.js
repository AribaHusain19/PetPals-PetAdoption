import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:aribahusain7070@gmail.com">
        aribahusain7070@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/aribahusain/">
          User Name: aribahusain
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/AribaHusain19">
          AribaHusain19
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/aribahusain6/">
          @aribahusain6
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919123460126">
          +91 9123460126
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
