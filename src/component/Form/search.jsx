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
    return (
      <React.Fragment>
        <form className="form-inline mr-auto">
          <input
            type="text"
            className="form-control m-2"
            placeholder="Find city"
            value={this.state.searchField}
            onChange={this.onSearchChange}
          />
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={this.onSearchSubmit}
          >
            Search
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
