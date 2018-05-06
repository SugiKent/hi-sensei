import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {

    const word = this.props.item.solved ? "未解決にする" : '解決済みにする'

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
            <Link to={`/question/${this.props.item.id}/edit`}>編集</Link>
            <Link to="#" onClick={() => this.props.toggleSolved(this.props.item.id)}>{word}</Link>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  toggleSolved: PropTypes.func.isRequired,

  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    solved: PropTypes.bool,
  })
}
