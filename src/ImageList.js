import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import './ImageList.css';


/** ImageList: shows list of images passed in as props. */

class ImageList extends React.PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <div className="ImageList">
        {this.props.images.map(img =>
          <Image key={img.id} title={img.title} url={img.url} />
        )}
      </div>
    )
  }
}

export default ImageList;