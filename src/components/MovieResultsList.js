import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Movie from "./Movie";

const MovieResultsList = ({ movieResults, selectMovie }) => {
  const movieResultsList = movieResults.map((movie) => (
    <ListItem onClick={() => selectMovie(movie)} button key={movie.tconst}>
      <Movie movie={movie} />
    </ListItem>
  ));
  return (
    <div>
      <Typography variant="h4" align="center" color="textSecondary">
        Results:
      </Typography>
      <List>{movieResultsList}</List>
    </div>
  );
};

export default MovieResultsList;
