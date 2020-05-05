import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import { ListItem } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "./Movie";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
  },
}));

const MovieResultsList = ({ movieResults, selectMovie }) => {
  const classes = useStyles();
  const movieResultsList = movieResults.map((movie) => (
    <ListItem
      alignItems="center"
      onClick={() => selectMovie(movie)}
      button
      key={movie.tconst}
    >
      <Movie movie={movie} />
    </ListItem>
  ));

  return (
    // <div>
    //   <Typography variant="h4" align="center" color="textSecondary">
    //     Results:
    //   </Typography>
    //   {movieResultsList}
    // </div>
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography
          gutterBottom
          align="center"
          variant="h4"
          color="textSecondary"
        >
          Results:
        </Typography>
        <Container className={classes.cardGrid} maxWidth="lrg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              {movieResultsList}
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default MovieResultsList;
