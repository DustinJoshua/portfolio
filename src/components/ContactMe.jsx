import React from "react";
import classes from "./ContactMe.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

const ContactMe = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.upContainer}>
        <a href="#projects" className={classes.up}>
          &#8963;
        </a>
      </div> */}
      <h3 id="contact">Contact Me</h3>
      <div className={classes.contactMethods}>
        <a target="_blank" href="tel:7783846283" className={classes.method}>
          <p>
            <AiFillPhone />
            <span>778-384-6283</span>
          </p>
        </a>
        <a
          className={classes.method}
          target="_blank"
          href="https://github.com/DustinJoshua"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          href="mailto:dlott8@my.bcit.ca"
          className={classes.method}
        >
          <p>
            <AiOutlineMail />
            <span>dlott8@my.bcit.ca</span>
          </p>
        </a>
        <a
          className={classes.method}
          target="_blank"
          href="www.linkedin.com/in/dustinlott"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
