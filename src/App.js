import React, { Component } from 'react';

import RandomImage from './RandomImage';
import SearchBox from './SearchBox';
import ImageList from './ImageList';

import './App.css';

/** App: Giphy Part: shows random img, search form, and list of images. */

class App extends Component {
  state = { images: [] };

  add = (img) => {
    this.setState(state => ({ images: [...this.state.images, img] }))
  }

  render() {
    return (
      <div className="App">
        <h1>Giphy Party!</h1>
        <SearchBox add={this.add} />
        <RandomImage />
        <ImageList images={this.state.images} />
      </div >
    );
  }
}

export default App;
