import React from 'react';
import Textarea from 'react-textarea-autosize';

export default class QuestionContentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div className="input-field">
        <Textarea id="textarea" {...input} placeholder={label} className="Form__textarea" minRows={10} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
}
