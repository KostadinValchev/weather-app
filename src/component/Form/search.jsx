import React, { Component } from "react";
import "./search.css";
import Form from "./form";

class Search extends Component {
  state = {
    searchField: ""
  };
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  onSearchSubmit = () => {
    console.log("search");
    this.props.onSearchSubmit(this.state.searchField);
    this.setState({ searchField: "" });
  };
  render() {
    return (
      <form className="searchBox">
        <input
          type="text"
          placeholder="Find city"
          value={this.state.searchField}
          onChange={this.onSearchChange}
        />
        <input type="button" value="Search" onClick={this.onSearchSubmit} />
      </form>
    );
  }
}

export default Search;
