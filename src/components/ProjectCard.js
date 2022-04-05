import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import classes from './ProjectCard.module.css'



function ProjectCard(props) {
  return (
    <Card className={classes.card} sx={{ backgroundColor:"transparent" }}>
      <CardMedia
        component="img"
        height="150"
        image={props.pic}
        alt={props.title}
      />
      <CardContent className={classes.cardContent} >
  
        <div className={classes.name}>{props.title}</div>
        <br/>
       {props.text}
      </CardContent>
     
    </Card>
  );
}

export default ProjectCard;