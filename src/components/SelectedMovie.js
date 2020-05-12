import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { moviePropType } from "../constants/propTypes";
import Movie from "./Movie";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    padding: 25,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "lightBlue",
  },
  // titleOne: {
  //   fontSize: 18,
  //   color: "gray",
  // },
});

const SelectedMovie = ({ selectedMovie }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        {/* <Typography variant="h5" className={classes.titleOne}>
          Selected Movie:
        </Typography> */}
        <Movie movie={selectedMovie} />
      </Card>
    </React.Fragment>
  );
};

SelectedMovie.propTypes = {
  selectedMovie: moviePropType,
};

export default SelectedMovie;
