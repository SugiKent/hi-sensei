import React from'react'

export default class FieldInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div className="input-field col s6">
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )
  }
}
