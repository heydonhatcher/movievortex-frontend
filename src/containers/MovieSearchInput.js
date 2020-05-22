import { connect } from "react-redux";
import MovieSearchInput from "../components/MovieSearchInput";
import { movieTitleSearchStarted, movieTitleInputChanged } from "../actions";

const mapStateToProps = (state) => ({ title: state.movieTitleSearchValue });

const mapDispatchToProps = (dispatch) => ({
  onTitleChange: (title) => dispatch(movieTitleInputChanged(title)),
  onTitleSubmit: (title) => dispatch(movieTitleSearchStarted(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchInput);
