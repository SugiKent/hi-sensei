import React from 'react';
import PropTypes from 'prop-types';
import QuestionNewForm from './QuestionNewForm'
import {Redirect} from 'react-router-dom';

export default class QuestionNew extends React.Component {

  clickSave(values) {
    M.toast({html: '保存しました。'});
    this.props.toCreate(values);
  }

  render() {
    const {question,error} = this.props;
    return (
      <div className="row">
        {(() => {
          if (error) {
            return <p>エラーが発生</p>;
          } else {
            return (
              <div className="row">
                <QuestionNewForm onSubmit={values => this.clickSave(values)} />
              </div>
            );
          }
        })()}
      </div>
    );
  }

}

QuestionNew.propTypes = {
  toCreate: PropTypes.func.isRequired,

  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    solved: PropTypes.bool,
  }),
  question_contents: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    question_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
  error: PropTypes.bool.isRequired
};
