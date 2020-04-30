import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";
import MovieSearchInput from "../containers/MovieSearchInput";
import Error from "./Error";
import Login from "../containers/Login";

const MovieVortex = ({
  user,
  selectedMovie,
  movieResultsAreLoading,
  error
}) => {
  if (user === null) {
    return <Login />;
  }
  const movieResults = error ? (
    <Error error={error} />
  ) : movieResultsAreLoading ? (
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
