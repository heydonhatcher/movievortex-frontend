import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default ({ error }) => {
  return (
    <Alert severity="error">
      <AlertTitle>An error has occurred.</AlertTitle>
      {error}
    </Alert>
  );
};
