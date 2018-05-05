import {connect} from 'react-redux';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import FieldInput from './formParts/fieldInput'

class QuestionForm extends React.Component {

  render() {
    const {handleSubmit, question} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <Field
              id={'title'}
              name="title"
              type="text"
              component="input"
            />
          </div>
          <div className="col s12 right-align">
            <button type="submit" className="waves-effect waves-light btn"><i className="material-icons left">save</i>作成</button>
          </div>
        </div>
      </form>
    )
  }
}

// QuestionFormをreduxForm化する
let InitializedQuestionForm = reduxForm({
  form: 'questionForm',
  initialValues: {title: 'terao'},
  enableReinitialize: true,
})(QuestionForm);

// FormにinitialValuesを設定
InitializedQuestionForm = connect(
  state => ({
    initialValues: {
      title: state.questionShow.question.title
    }
  })
)(InitializedQuestionForm);

export default InitializedQuestionForm;
