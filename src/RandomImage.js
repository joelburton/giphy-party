import React from 'react';
import axios from 'axios';

import Image from './Image';

import { DEFAULT_TITLE, GIPHY_RANDOM_URL } from './config';

import './RandomImage.css';


/** RandomImage: select random image from API & displays. */

class RandomImage extends React.Component {
  state = { 'url': null, 'title': null };

  async componentDidMount() {
    let img;

    try {
      const res = await axios.get(GIPHY_RANDOM_URL);
      img = res.data.data;
    } catch (err) {
      console.error(`Error using GIPHY API: ${err}`);
      return;
    }

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

export default RandomImage;