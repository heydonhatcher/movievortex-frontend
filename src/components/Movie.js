import React from "react";
import PersonList from "./PersonList";
import Box from "@material-ui/core/Box";

const Movie = ({ movie }) => (
  <div>
    <Box bgcolor="info.main" border={1} boxShadow={3} padding="25px">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
      <PersonList className="movie-directors" people={movie.directors} />
      <PersonList className="movie-writers" people={movie.writers} />
      <PersonList className="movie-actors" people={movie.actors} />
    </Box>
  </div>
);

export default Movie;
