import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";

const MovieVortex = ({ movieResultsAreLoading }) => {
  const movieResults = movieResultsAreLoading ? (
    <CircularProgress />
  ) : (
    <MovieResultsList />
  );
  return (
    <div>
      <SelectedMovie />
      {movieResults}
    </div>
  );
};

export default MovieVortex;
