import React from "react";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_IDENTITY_CLIENT_ID } from "../constants/protected";

export default ({ loginSuccess, loginFailure }) => (
  <GoogleLogin
    clientId={GOOGLE_IDENTITY_CLIENT_ID}
    buttonText="Login"
    onSuccess={loginSuccess}
    onFailure={loginFailure}
    cookiePolicy={"single_host_origin"}
  />
);
