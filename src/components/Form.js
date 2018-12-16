import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: ""
    };
  }

  onTextChange = e => {
    const textContent = e.target.value;
    this.setState({ textContent });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ textContent: "" })
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
          onChange={this.onTextChange}
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
