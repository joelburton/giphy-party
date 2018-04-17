import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { GIPHY_RANDOM_URL, DEFAULT_TITLE } from './config';
import './SearchBox.css';


/** SearchBox: show search form and handles searching for image.  */

class SearchBox extends React.Component {
  static propTypes = {
    search: PropTypes.func,
  }

  // term: current search term field
  // msg: searching/error message to show
  state = { term: "", msg: null };

  handleChange = (e) => {
    this.setState({ term: e.target.value })
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (await this.search(this.state.term)) {
      // if search found results, clear box, else keep to make retry easier
      this.setState({ term: "" });
    }
  };

  /** search: search GIPHY for `term`, handle errors, and call add on parent. 
   * 
   * Returns true/false for success of search.
  */

  search = async (term) => {
    let img;
    this.setState({ msg: "Searching..." });

    try {
      const res = await axios.get(`${GIPHY_RANDOM_URL}&tag=${term}`);
      img = res.data.data;
    } catch (err) {
      this.setState({ msg: "Error connecting" });
      console.error(`Error using GIPHY API: ${err}`);
      return false;
    }

    if (!img.id) {
      this.setState({ msg: "No image found!" });
      return false;
    }

    this.setState({ msg: null });

    this.props.add({
      url: img.image_url,
      title: img.title || DEFAULT_TITLE,
      id: img.id,
    });

    return true;
  };

  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.term}
            placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        {this.state.msg
          ? <p><i className="SearchBox-msg">{this.state.msg}</i></p>
          : null}
      </div>
    );
  }
}

export default SearchBox;