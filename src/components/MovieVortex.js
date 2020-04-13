import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";
import MovieSearchInput from "../containers/MovieSearchInput";

const MovieVortex = ({ selectedMovie, movieResultsAreLoading }) => {
  const movieResults = movieResultsAreLoading ? (
    <CircularProgress />
  ) : (
    <MovieResultsList />
  );
  const movieInput = selectedMovie ? <SelectedMovie /> : <MovieSearchInput />;
  return (
    <div>
      {movieInput}
      {movieResults}
    </div>
  );
};

export default MovieVortex;
