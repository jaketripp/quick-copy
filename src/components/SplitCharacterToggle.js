import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

const SplitCharacterToggle = props => (
  <div className="splitCharacterToggle">
    <FormControlLabel
      control={
        <Switch
          checked={props.shouldSplitOnNewLines}
          onChange={props.handleSwitchChange}
          color="primary"
        />
      }
      label="Split on newlines"
    />
  </div>
);

export default SplitCharacterToggle;
