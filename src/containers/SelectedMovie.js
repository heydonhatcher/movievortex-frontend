import { connect } from "react-redux";
import SelectedMovie from "../components/SelectedMovie";

const mapStateToProps = (state) => ({ selectedMovie: state.selectedMovie });

export default connect(mapStateToProps)(SelectedMovie);
