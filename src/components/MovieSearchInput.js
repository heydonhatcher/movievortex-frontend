import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default ({ title, onTitleChange, onTitleSubmit }) => (
  <form>
    <TextField
      value={title}
      onChange={event => onTitleChange(event.target.value)}
      label="Standard"
    />
    <Button
      variant="contained"
      color="primary"
      onClick={() => onTitleSubmit(title)}
    >
      Submit
    </Button>
  </form>
);
