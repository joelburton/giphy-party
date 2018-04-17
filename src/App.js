import React, { Component } from 'react';
import axios from 'axios';

import RandomGraphic from './RandomGraphic';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

import './App.css';
import { GIPHY_RANDOM_URL, DEFAULT_TITLE } from './config';

class App extends Component {
  state = { images: [], apiKey: "" };

  search = async (term) => {
    const res = await axios.get(`${GIPHY_RANDOM_URL}&tag=${term}`);
    const img = res.data.data;
    this.setState((state, props) => ({
      images: [...this.state.images, {
        url: img.image_url,
        title: img.title || DEFAULT_TITLE,
        id: img.id,
      }]
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Giphy Party!</h1>
        <SearchBox search={this.search} />
        <RandomGraphic />
        <ImageList images={this.state.images} />
      </div >
    );
  }
}

export default App;
