import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import classes from "./ProjectCard.module.css";

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
