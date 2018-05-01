import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    return (
      <div key={`ranking-item-${this.props.item.code}`} className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={this.props.item.imageUrl} alt={this.props.item.name} />
          </div>
          <div className="card-content">
            <p>
              {this.props.item.name}
            </p>
          </div>
          <div className="card-action">
            <a href={this.props.item.url} target="_blank">This is a link</a>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })
}
