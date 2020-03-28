import React from "react";
import { connect } from "react-redux";
import MovieResultsList from "../components/MovieResultsList";
import { newMovieSelected } from "../actions";

const mapStateToProps = state => ({ movieResults: state.movieResults });

const mapDispatchToProps = dispatch => ({
  selectMovie: movie => dispatch(newMovieSelected(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieResultsList);
