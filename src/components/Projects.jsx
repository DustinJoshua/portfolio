import React from "react";
import ProjectCard from "./ProjectCard";
import classes from "./Projects.module.css";
import BestrideImg from "../content/images/BestRide.png";
import SkillMeet from "../content/images/SkillMeet.png";
import GotN from "../content/images/GotN.png";
import Daile from "../content/images/Daile.png";
import { Row, Container } from "react-bootstrap";

export const PROJECTS = [
  {
    image: GotN,
    title: "Games of the Night",
    description: `Games of the Night is a MERN stack web app used to rate the latest NBA basketball games.
       This will allow people to find games to watch that are entertaining, without getting the results spoiled.`,
    technologies:
      "React, Node.js, Express.js, MongoDB, MaterialUI, Heroku, RapidAPI",
    repoLink: "https://github.com/DustinJoshua/games-of-the-night.git",
    webLink: "https://gamesofthenight.herokuapp.com/",
  },
  {
    image: BestrideImg,
    title: "Bestride",
    description: `Web App used to compare the prices of different RideShare and Driver for Hire services.
      The site is connected to the google maps API, allowing users to benefit from the address autocomplete, directions, and distance.
      The Estimates page is not connected to outside APIs, we just used estimated calculations.`,
    technologies: "Html5, Bootstrap, Jquery, Firebase, Google Maps API",
    github: "https://github.com/ArunabSingh/Team13_app.git",
    website: "https://bestride-c8357.web.app/",
  },
  {
    image: SkillMeet,
    title: "SkillMeet",
    description: `A mix between a peer-based learning and friendship app.  
    Create a profile based on skills that you want to share or learn. Give individual descriptions 
    for each skill as well as a level of expertise.  Search for and find people based on skills, 
    add them as a friend, and begin to chat with them.`,
    technologies: "React, Javascript/JSX, Firebase, and MaterialUi",
    github: "https://github.com/longvulam/COMP-2800-Team-BBY-21-SkillMeet.git",
    website: "https://skillmeet-4c737.web.app/",
  },
  {
    image: Daile,
    title: "Daile",
    description: `An endless top-down shooter game developed using C# in Unity.  Combined different 2D assets 
    and SFX to create a unique environment.`,
    technologies: "C#, Unity",
    github: "https://github.com/DustinJoshua/Daile.git",
    website: "https://sharemygame.com/@Nauf/daile",
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className={classes.container}>
        <div className={classes.upContainer}>
          <a href="#aboutMe" className={classes.up}>
            &#8963;
          </a>
        </div>
        <h1>Projects</h1>
        <Container>
          <Row className="justify-content-space-between" flexwrap="wrap">
            {PROJECTS.map((project) => (
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                github={project.github}
                website={project.website}
                technologies={project.technologies}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
