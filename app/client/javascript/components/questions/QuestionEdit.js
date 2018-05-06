import React from 'react';
import PropTypes from 'prop-types';
import QuestionForm from './QuestionForm'

export default class QuestionEdit extends React.Component {

  componentWillMount() {
    // containersのonMountを実行
    this.props.onMount(this.props.questionId);
  }

  clickSave(values, question) {
    M.toast({html: '保存しました。'});
    this.props.toUpdate(values, question.id);
  }

  render() {
    const {question,error} = this.props;
    return (
      <div className="row">
        {(() => {
          if (error) {
            return <p>エラーが発生</p>;
          } else if (typeof question === 'undefined') {
            return <p>読み込み中・・・</p>
          } else {
            return (
              <div className="row">
                <QuestionForm onSubmit={values => this.clickSave(values, question)} question={question} removeContent={this.props.removeContent} />
              </div>
            );
          }
        })()}
      </div>
    );
  }

}

QuestionEdit.propTypes = {
  onMount: PropTypes.func.isRequired,
  toUpdate: PropTypes.func.isRequired,
  removeContent: PropTypes.func.isRequired,

  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    solved: PropTypes.bool,
  }),
  question_contents: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    question_id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  error: PropTypes.bool.isRequired
};
