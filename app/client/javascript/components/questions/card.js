import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    return (
      <div key={`question-card-${this.props.item.id}`} className="col s12 m6">
        <div className="card hoverable">
          <div className="card-image">
          </div>
          <div className="card-content">
            <p>
              {this.props.item.title}
            </p>
          </div>
          <div className="card-action">
            <Link to={`/question/${this.props.item.id}`}>編集</Link>
            <a href={`/questions/${this.props.item.id}`}>解決済みにする</a>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })
}
