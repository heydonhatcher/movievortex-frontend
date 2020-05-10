import React, { useEffect } from "react";
import Cookies from "js-cookie";
import MovieResultsList from "../containers/MovieResultsList";
import SelectedMovie from "../containers/SelectedMovie";
import MovieSearchInput from "../containers/MovieSearchInput";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Error from "./Error";
import Login from "../containers/Login";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    alignItems: "center",
    marginTop: "auto",
    backgroundColor: "lightBlue",
  },
}));

const MovieVortex = ({
  user,
  setUser,
  selectedMovie,
  movieResultsAreLoading,
  error,
}) => {
  const classes = useStyles();
  useEffect(() => {
    let user = Cookies.get("user");
    if (user) {
      setUser(user);
    }
  });

  if (user === null) {
    return <Login error={error} />;
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
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            We hope you find a movie to enjoy! Thanks for using Movie Roulette.
          </Typography>
          <Typography variant="subtitle2">
            Information courtesy of IMDb (http://www.imdb.com). Used with
            permission.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default MovieVortex;
