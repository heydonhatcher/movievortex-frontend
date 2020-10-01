import React from "react";
import { GoogleLogin } from "react-google-login";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Error from "./Error";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { GOOGLE_IDENTITY_CLIENT_ID } from "../constants/protected";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.grey[100],
  },
  image: {
    backgroundImage: "url(" + require("../logojpg.jpg") + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default ({ loginSuccess, loginFailure, error }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in, loser!
          </Typography>
          <GoogleLogin
            clientId={GOOGLE_IDENTITY_CLIENT_ID}
            buttonText="Log into Movie Roulette"
            width="240"
            height="50"
            longtitle="true"
            theme="dark"
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        {error && <Error error={error} />}
      </Grid>
    </Grid>
  );
};
