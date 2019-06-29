import React from "react";
import { TextField } from "@material-ui/core";

const SplitCharacterInput = props => (
  <div className="splitCharacterInput">
    <TextField
      className="form__textarea"
      id="standard-with-placeholder"
      label="Custom split character"
      placeholder="i.e. & : | { etc"
      value={props.splitCharacter}
      onChange={props.handleSplitCharacterChange}
    />
  </div>
);

export default SplitCharacterInput;
