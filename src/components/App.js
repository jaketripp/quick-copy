// packages
import React, { Component } from "react";
import uuidv4 from "uuid/v4";

// components
import RecentlyCopied from "./RecentlyCopied";
import Toast from "./Toast";
import Header from "./Header";
import DeleteToggle from "./DeleteToggle";
import Form from "./Form";
import CopyBlockList from "./CopyBlockList";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyBlockMap: {},
      shouldDeleteAfter: true,
      shouldShowToast: false,
      recentlyCopied: ""
    };
  }

  // update recently copied when copy block clicked
  updateRecentlyCopied = mostRecentlyCopied => {
    this.setState({ recentlyCopied: mostRecentlyCopied });
  };

  // update parent state when switch toggled
  handleSwitchChange = e => {
    this.setState({ shouldDeleteAfter: !this.state.shouldDeleteAfter });
  };

  // have form update map when submit button pressed
  formSubmit = textContent => {
    const copyBlockMap = textContent.split("\n").reduce((map, copyBlock) => {
      let trimmedCopyBlock = copyBlock.trim();
      if (trimmedCopyBlock) {
        let uuid = uuidv4();
        map[uuid] = trimmedCopyBlock;
      }
      return map;
    }, {});
    this.setState({ copyBlockMap });
  };

  // delete block from map -> passed to child component
  deleteCopyBlock = uuid => {
    let { copyBlockMap } = this.state;
    delete copyBlockMap[uuid];
    this.setState({ copyBlockMap });
  };

  toggleCopiedToast = () => {
    this.setState({ shouldShowToast: !this.state.shouldShowToast });
  };

  render() {
    const shouldShowRecentlyCopied = !!this.state.recentlyCopied;
    const shouldShowCopyBlockList =
      Object.values(this.state.copyBlockMap).length > 0;
    return (
      <div className="App">
        <div className="main">
          <Header />

          <DeleteToggle
            shouldDeleteAfter={this.state.shouldDeleteAfter}
            handleSwitchChange={this.handleSwitchChange}
          />

          {shouldShowCopyBlockList && (
            <CopyBlockList
              copyBlockMap={this.state.copyBlockMap}
              updateRecentlyCopied={this.updateRecentlyCopied}
              deleteCopyBlock={this.deleteCopyBlock}
              toggleCopiedToast={this.toggleCopiedToast}
              shouldDeleteAfter={this.state.shouldDeleteAfter}
            />
          )}

          <Form
            textContent={this.state.textContent}
            copyBlockMap={this.state.copyBlockMap}
            formSubmit={this.formSubmit}
            onTextChange={this.onTextChange}
          />
        </div>
        <div className="sidebar">
          {shouldShowRecentlyCopied && (
            <RecentlyCopied content={this.state.recentlyCopied} />
          )}

          <Toast
            shouldShowToast={this.state.shouldShowToast}
            onClose={this.toggleCopiedToast}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
