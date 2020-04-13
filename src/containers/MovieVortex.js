import React from "react";
import { connect } from "react-redux";
import MovieVortex from "../components/MovieVortex";

const mapStateToProps = state => ({
  selectedMovie: Object.keys(state.selectedMovie).length !== 0,
  movieResultsAreLoading: state.movieResultsAreLoading
});

export default connect(mapStateToProps)(MovieVortex);