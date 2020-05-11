import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { moviePropType } from "../constants/propTypes";
import Movie from "./Movie";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    padding: 15,
    position: "relative",
  },
  titleOne: {
    fontSize: 18,
    color: "gray",
  },
});

const SelectedMovie = ({ selectedMovie }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.titleOne}>Selected Movie:</Typography>
      <Movie movie={selectedMovie} />
    </Paper>
  );
};

SelectedMovie.propTypes = {
  selectedMovie: moviePropType,
};

export default SelectedMovie;
