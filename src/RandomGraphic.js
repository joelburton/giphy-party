import React from 'react';
import axios from 'axios';

import Image from './Image';

import { GIPHY_API_KEY, DEFAULT_TITLE } from './config';

import './RandomGraphic.css';

class RandomGraphic extends React.Component {
  state = { 'url': null, 'title': null };

  async componentDidMount() {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`);
    const img = res.data.data;
    this.setState({ url: img.image_url, title: img.title || DEFAULT_TITLE });
  }

  render() {
    if (this.state.url) {
      return (
        <div className="RandomGraphic">
          <Image url={this.state.url} title={this.state.title} />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default RandomGraphic;