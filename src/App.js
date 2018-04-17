import React, { Component } from 'react';
import axios from 'axios';

import RandomGraphic from './RandomGraphic';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

import './App.css';
import { GIPHY_API_KEY, DEFAULT_TITLE } from './config';

class App extends Component {
  state = { images: [], apiKey: "" };

  search = async (term) => {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${term}`);
    const img = res.data.data;
    this.setState((state, props) => ({
      images: [...this.state.images, {
        url: img.image_url,
        title: img.title || DEFAULT_TITLE,
        id: img.id,
      }]
    }))
  }

  handleKeyChange = (e) => {
    this.setState({ apiKey: e.target.value });
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
