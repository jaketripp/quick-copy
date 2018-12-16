import React, { Component } from "react";
import copyTextToClipboard from "../js/copy";
import { Card, CardContent, Typography } from "@material-ui/core";

class CopyBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  
  copyBlockClicked = () => {

    const { content } = this.props;

    copyTextToClipboard(content);
    this.props.showCopiedToast();
    this.props.updateRecentlyCopied(content);

    if (this.props.shouldDeleteAfter) {
      // apply css class to fade out
      this.setState({ show: false });
      // wait a bit then remove from map
      setTimeout(() => {
        this.props.deleteCopyBlock(this.props.uuid);
      }, 300);
    }
    
  };

  render() {
    const cardClass = this.state.show ? 'copyblock' : 'copyblock hidden';
    return (
      <Card onClick={this.copyBlockClicked} className={cardClass}>
        <CardContent>
          <Typography>{this.props.content}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CopyBlock;
