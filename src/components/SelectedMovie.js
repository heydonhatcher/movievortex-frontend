import React from "react";
import { moviePropType } from "../constants/propTypes";
import Movie from "./Movie";

const SelectedMovie = ({ selectedMovie }) => {
  return <Movie movie={selectedMovie} />;
};

SelectedMovie.propTypes = {
  selectedMovie: moviePropType
};

export default SelectedMovie;
