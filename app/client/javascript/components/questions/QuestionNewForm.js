import {connect} from 'react-redux';
import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';

class QuestionNewForm extends React.Component {

  render() {
    const {handleSubmit} = this.props;

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
            <div className="row">
              <div className="col s12 right-align">
                <button type="submit" className="waves-effect waves-light btn"><i className="material-icons left">save</i>保存</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )

  }
}


// QuestionFormをreduxForm化する
let InitializedQuestionNewForm = reduxForm({
  form: 'questionNewForm',
  enableReinitialize: true,
})(QuestionNewForm);

export default InitializedQuestionNewForm;
