import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Movie from "./Movie";

const MovieResultsList = ({ movieResults, selectMovie }) => {
  const movieResultsList = movieResults.map(movie => (
    <ListItem onClick={() => selectMovie(movie)} button key={movie.tconst}>
      <Movie movie={movie} />
    </ListItem>
  ));
  return (
    <div>
      <h1>RESULTS:</h1>
      <List>{movieResultsList}</List>
    </div>
  );
};

export default MovieResultsList;
