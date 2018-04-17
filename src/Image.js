import React from 'react';
import PropTypes from 'prop-types';

import './Image.css';

class Image extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
  }

  render() {
    return (
      <div className="Image">
        <div>{this.props.title}</div>
        <img src={this.props.url} title={this.props.title} alt={this.props.title} />
      </div>
    )
  }
}

export default Image;