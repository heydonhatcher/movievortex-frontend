import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { frontendLoginSuccess, loginFailure } from "../actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (response) => dispatch(frontendLoginSuccess(response)),
  loginFailure: (response) => dispatch(loginFailure(response)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
