import React, { Component } from "react";
import { FormControlLabel, Switch, TextField, Button } from "@material-ui/core";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: ""
    };
  }

  handleTextChange = e => {
    this.setState({ textContent : e.target.value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ textContent: "" });
    this.props.formSubmit(this.state.textContent);
  };

  render(props) {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <TextField
          className="form__textarea"
          id="standard-multiline-flexible"
          label="What you want to copy"
          multiline
          rowsMax="12"
          value={this.state.textContent}
          onChange={this.handleTextChange}
        />
        <div className="form__button-container">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={this.state.textContent == ""}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default Form;
