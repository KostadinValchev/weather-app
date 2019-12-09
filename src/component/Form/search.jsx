import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  state = {
    searchField: ""
  };
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  onSearchSubmit = () => {
    this.props.onSearchSubmit(this.state.searchField);
    this.setState({ searchField: "" });
  };
  render() {
    let error = this.props.error;
    return (
      <form className="searchBox">
        {error && <div className="error">{error}</div>}
        <div>
          <input
            type="text"
            placeholder="Find city"
            value={this.state.searchField}
            onChange={this.onSearchChange}
          />
          <input type="button" value="Search" onClick={this.onSearchSubmit} />
        </div>
      </form>
    );
  }
}

export default Search;
