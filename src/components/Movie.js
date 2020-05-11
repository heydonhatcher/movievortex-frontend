import React from "react";
import PersonList from "./PersonList";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { API_URL } from "../constants";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    padding: 5,
    display: "flex",
  },
  title: {
    fontSize: 18,
  },
  secondTitle: {
    fontSize: 14,
  },
  media: {
    height: 250,
    width: 200,
  },
});

const Movie = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>{movie.title}</Typography>
        <Typography className={classes.title}>{movie.year}</Typography>
        <Typography className={classes.secondTitle}>Director(s)</Typography>
        <PersonList className="movie-directors" people={movie.directors} />
        <Typography className={classes.secondTitle}>Writer(s)</Typography>
        <PersonList className="movie-writers" people={movie.writers} />
        <Typography className={classes.secondTitle}>Actor(s)</Typography>
        <PersonList className="movie-actors" people={movie.actors} />
      </CardContent>
      <CardMedia
        className={classes.media}
        image={API_URL + "/movies/poster/" + movie.tconst}
        title={movie.title}
      />
    </Card>
  );
};

export default Movie;
