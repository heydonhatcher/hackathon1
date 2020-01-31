import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("A search was submitted: " + this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
