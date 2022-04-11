import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import classes from "./css/ProjectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={classes.card}>
      <CardMedia
        component="img"
        height="175"
        image={props.pic}
        alt={props.title}
      />
      <CardContent>
        <div className={classes.name}>{props.title}</div>

        {props.text}
      </CardContent>
    </div>
  );
}

export default ProjectCard;
