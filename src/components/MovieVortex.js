import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";

const MovieVortex = ({ selectedMovieIsLoading, movieResultsAreLoading }) => {
  const selectedMovie = selectedMovieIsLoading ? (
    <CircularProgress />
  ) : (
    <SelectedMovie />
  );
  const movieResults = movieResultsAreLoading ? (
    <CircularProgress />
  ) : (
    <MovieResultsList />
  );
  return (
    <div>
      {selectedMovie}
      {movieResults}
    </div>
  );
};

export default MovieVortex;
