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
    copyTextToClipboard(this.props.content);
    const { shouldDeleteAfter } = this.props;
    console.log(shouldDeleteAfter);
    if (shouldDeleteAfter) {
      this.setState({ show: false });
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
          <Typography color="textSecondary">{this.props.content}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CopyBlock;
