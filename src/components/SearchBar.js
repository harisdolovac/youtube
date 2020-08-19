import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="SEARCH..."
            style={{ width: "90%" }}
            onChange={this.handleChange}
          />
          <span className="Search-button">
            <SearchIcon className="Search-icon" />
          </span>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
