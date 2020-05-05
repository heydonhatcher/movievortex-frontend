import React from "react";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";
import MovieSearchInput from "../containers/MovieSearchInput";
import LinearProgress from "@material-ui/core/LinearProgress";
import Error from "./Error";
import Login from "../containers/Login";

const MovieVortex = ({
  user,
  selectedMovie,
  movieResultsAreLoading,
  error,
}) => {
  if (user === null) {
    return <Login />;
  }
  const movieResults = error ? (
    <Error error={error} />
  ) : movieResultsAreLoading ? (
    <LinearProgress color="secondary" />
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
