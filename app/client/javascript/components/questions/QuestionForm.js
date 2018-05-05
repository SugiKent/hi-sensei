import {connect} from 'react-redux';
import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import QuestionContentForm from './questionContentForm'

class QuestionForm extends React.Component {

  removeField(fields, index) {
    if(window.confirm("削除してよろしいですか？\n削除した項目は復元できません。")){
      const questionId = location.pathname.match(/[0-9]+/);
      fields.remove(index);
      M.toast({html: '削除しました。'});
      this.props.removeContent(questionId[0], index);
    }
  }

  render() {
    const {handleSubmit, question} = this.props;
    const renderContents = ({ fields }) => (
      <div>
        <ul className="list-group">
          {fields.map(renderContentFields)}
        </ul>
        <div className="right">
          <button className="btn-floating waves-effect waves-light red" type="button" onClick={() => fields.push({})}><i className="material-icons">add</i>追加</button>
        </div>
      </div>
    );

    const renderContentFields = (question_contents_attributes, index, fields) => (
      <li key={index} className={'list-group-item'}>
        <div className="Form__group">
          <div className="Form__header">
            <div className="row">
              <div className="col s10">
                <Field
                  name={`${question_contents_attributes}.title`}
                  type="text"
                  component="input"
                />
              </div>
              <div className="col s2">
                <a className="btn-small waves-effect waves-light blue-grey darken-3" style={{marginRight: '10px'}} onClick={() => this.removeField(fields, index)}><i className="material-icons left">delete</i>削除</a>
              </div>
            </div>
          </div>
          <Field
            name={`${question_contents_attributes}.content`}
            type="text"
            component={QuestionContentForm}
          />
        </div>
      </li>
    );

    return (
      <form onSubmit={handleSubmit} onBlur={handleSubmit}>
        <div className="row">
          <div className="input-field col m6 s12">
            <Field
              id={'title'}
              name="title"
              type="text"
              component="input"
            />
          </div>
          <div className="input-field col s12">
            <FieldArray
              id='question_contents_attributes'
              name="question_contents_attributes"
              component={renderContents}
            />
          </div>
        </div>
      </form>
    )

  }
}


// QuestionFormをreduxForm化する
let InitializedQuestionForm = reduxForm({
  form: 'questionForm',
  enableReinitialize: true,
})(QuestionForm);

// FormにinitialValuesを設定
InitializedQuestionForm = connect(
  state => ({
    initialValues: {
      title: state.questionEdit.question.title,
      question_contents_attributes: state.questionEdit.question_contents
    }
  })
)(InitializedQuestionForm);

export default InitializedQuestionForm;
