import React from "react";
import PersonList from "./PersonList";

const Movie = ({ movie }) => (
  <div>
    <div className="movie-title">{movie.title}</div>
    <div className="movie-year">{movie.year}</div>
    <PersonList className="movie-directors" people={movie.directors} />
    <PersonList className="movie-writers" people={movie.writers} />
    <PersonList className="movie-actors" people={movie.actors} />
  </div>
);

export default Movie;
