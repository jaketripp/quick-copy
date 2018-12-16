import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Toast = props => (
  <Snackbar
    className="toast"
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={props.shouldShowToast}
    onClose={props.onClose}
    variant="success"
    autoHideDuration={1500}
    ContentProps={{
      "aria-describedby": "message-id"
    }}
    message={<span id="message-id">Copied!</span>}
  />
);

export default Toast;
