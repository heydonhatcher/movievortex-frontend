import { connect } from "react-redux";
import { userChanged } from "../actions";
import MovieVortex from "../components/MovieVortex";

const mapStateToProps = (state) => ({
  selectedMovie: Object.keys(state.selectedMovie).length !== 0,
  movieResultsAreLoading: state.movieResultsAreLoading,
  error: state.error,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(userChanged(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieVortex);
