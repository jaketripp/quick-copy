import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";

class Toast extends Component {

  render(props) {
    return (
      <Snackbar
        className="toast"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={this.props.shouldShowToast}
        onClose={this.props.onClose}
        variant="success"
        autoHideDuration={1500}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Copied!</span>}
      />
    );
  }
}

export default Toast;
