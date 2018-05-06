import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class QuestionHeader extends React.Component {
  render() {

    const word = this.props.question.solved ? "未解決にする" : '解決済みにする',
          color = this.props.question.solved ? 'grey' : 'orange';


    return (
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <li><Link to="/questions" className="grey-text">一覧へ</Link></li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li><Link className={`btn waves-effect waves-light ${color} darken-3`} to="#" onClick={() => this.props.toggleSolved(this.props.question.id)}>{word}</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

QuestionHeader.propTypes = {
  toggleSolved: PropTypes.func.isRequired,

  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    solved: PropTypes.bool,
  })
}
