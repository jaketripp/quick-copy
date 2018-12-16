import React, { Component } from "react";
import copyTextToClipboard from "../js/copy";
import { Card, CardContent, Typography } from "@material-ui/core";

class CopyBlock extends Component {
  copyBlockClicked = () => {
    copyTextToClipboard(this.props.content);
    this.props.deleteCopyBlock(this.props.uuid);
  };

  render() {
    return (
      <Card onClick={this.copyBlockClicked} className="copyblock">
        <CardContent>
          <Typography color="textSecondary">{this.props.content}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CopyBlock;
