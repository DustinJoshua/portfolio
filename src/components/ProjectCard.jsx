import React from "react";
import {
  Card,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  Col,
} from "react-bootstrap";
import BestrideImg from "../content/images/BestRide.png";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  website,
  github,
}) => {
  return (
    <Col xs={12} md={6} xl={4}>
      <h2 className={classes.projectTitle}>{title}</h2>
      <Card className={classes.cardBase}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text style={{ fontWeight: "bold" }}>
            Technologies used:
          </Card.Text>
          <Card.Text>{technologies}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link target="_blank" href={website}>
            <BiWorld />
            Live Website Link
          </Card.Link>
          <Card.Link target="_blank" href={github}>
            <AiFillGithub />
            Github Link
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
