import React from "react";
import { connect } from "react-redux";
import MovieVortex from "../components/MovieVortex";

const mapStateToProps = state => ({
  selectedMovieIsLoading: state.selectedMovieIsLoading,
  movieResultsAreLoading: state.movieResultsAreLoading
});

export default connect(mapStateToProps)(MovieVortex);
