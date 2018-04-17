import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';


class SearchBox extends React.Component {
  static propTypes = {
    search: PropTypes.func,
  }

  state = { term: "" };

  handleChange = (e) => {
    this.setState({ term: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SearchBox">
        <input
          onChange={this.handleChange}
          value={this.state.term}
          placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;