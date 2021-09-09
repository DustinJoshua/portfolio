import React from "react";
import { Button } from "react-bootstrap";
import classes from "./HeroBanner.module.css";
import Header from "./Navbar";
import Resume from "../content/files/Resume.pdf";

const HeroBanner = () => {
  return (
    <div id="home" className={classes.heroImage}>
      {/* <Header /> */}
      <div id="hi" className={classes.heroText}>
        <h1>Hi,</h1>
        <h1>I am Dustin Lott</h1>
        <h3>Fullstack Developer</h3>
        <a href={Resume} download="Dustin-Lott-Resume.pdf">
          <Button
            variant="outline-light"
            size="lg"
            className={classes.resumeBtn}
          >
            Download Resume
          </Button>
        </a>
        <a href="#aboutMe" className={classes.down}>
          &#8964;
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
