import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './card'
import Preloader from '../common/preloder';

export default class Questions extends React.Component {

  componentWillMount() {
    // containersのonMountを実行
    this.props.onMount();
  }

  render() {
    const {questions,error} = this.props;
    return (
      <div className="row">

        {(() => {
          if (error) {
            return <p>エラーが発生</p>;
          } else if (typeof questions === 'undefined') {
            return <Preloader />
          } else {
            return questions.map((item,i)=>(
              <Card key={`question-${item.id}`} toggleSolved={this.props.toggleSolved} item={item} />
            ))
          }
        })()}

        <div className="fixed-action-btn">
          <Link to="/question/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }

}

Questions.propTypes = {
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  toggleSolved: PropTypes.func.isRequired,

  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      solved: PropTypes.bool,
    })
  ),
  error: PropTypes.bool.isRequired
};
