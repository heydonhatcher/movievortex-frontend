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
    minWidth: 275,
    padding: 25,
  },
  title: {
    fontSize: 18,
  },
  media: {
    height: 140,
  },
});

const Movie = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={API_URL + "/movies/poster/" + movie.tconst}
        title={movie.title}
      />
      <CardContent>
        <Typography className={classes.title}>{movie.title}</Typography>
        <Typography className={classes.title}>{movie.year}</Typography>
        <Typography>Director(s)</Typography>
        <PersonList className="movie-directors" people={movie.directors} />
        <Typography>Writer(s)</Typography>
        <PersonList className="movie-writers" people={movie.writers} />
        <Typography>Actor(s)</Typography>
        <PersonList className="movie-actors" people={movie.actors} />
      </CardContent>
    </Card>
  );
};

export default Movie;
