import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <div id="aboutMe" className={classes.container}>
        <div className={classes.upContainer}>
          <a href="#hi" className={classes.up}>
            &#8963;
          </a>
        </div>
        <h1>About Me</h1>
        <p>
          I am currently enrolled in the
          <span> Computer Systems Technology (CST) </span>
          diploma program, and am participating in the{" "}
          <span> Co-op Program</span>, at{" "}
          <span>British Columbia Institute of Technology (BCIT)</span>.
        </p>
        <p>
          I am <span>excited to</span> be starting in this industry where people
          can <span>create amazing products and services</span> from nothing
          more than an idea.
        </p>
        {/* <p>
          Since I am early in my journey, I am still{" "}
          <span>interested in all facets of this industry</span>. I am sure
          there are many positions and career paths that I haven't even been
          exposed to yet, but I am <span>eager to find out</span>.
        </p> */}
        <p>
          So far I have been focused on <span>full stack web development</span>,
          and some
          <span> game development</span> on the side for fun. I do have a
          background in
          <span> business administation and finance</span>, and am also
          interested in the competitive <span>fintech</span> sector.
        </p>
        <div className={classes.downContainer}>
          <a href="#projects" className={classes.down}>
            &#8964;
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
