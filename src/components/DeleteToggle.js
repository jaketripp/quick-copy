import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

const DeleteToggle = props => (
  <div className="deleteToggle">
    <FormControlLabel
      control={
        <Switch
          checked={props.shouldDeleteAfter}
          onChange={props.handleSwitchChange}
          color="primary"
        />
      }
      label="Delete block after copying"
    />
  </div>
);

export default DeleteToggle;
