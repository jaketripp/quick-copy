import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import CopyBlockList from "./CopyBlockList";
import Footer from "./Footer";

import "../styles/main.scss";

import "typeface-roboto";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, blue }  from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange
  }
});

const uuidv4 = require("uuid/v4");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyBlockMap: {},
      thingLastCopied: ""
    };
  }

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

  deleteCopyBlock = uuid => {
    let { copyBlockMap } = this.state;
    delete copyBlockMap[uuid];
    this.setState({ copyBlockMap });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          {Object.values(this.state.copyBlockMap).length > 0 && (
            <CopyBlockList
              copyBlockMap={this.state.copyBlockMap}
              deleteCopyBlock={this.deleteCopyBlock}
            />
          )}
          <Form
            textContent={this.state.textContent}
            copyBlockMap={this.state.copyBlockMap}
            formSubmit={this.formSubmit}
            onTextChange={this.onTextChange}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
