import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

class SignUpForm extends Component {
  
    render() {
        const  { handleSubmit, pristine, reset, submitting } = this.props;

        const renderField = ({
          input,
          label,
          type,
          meta: { touched, error, warning }
        }) => (
          <div>
            <label>{label}</label>
            <div>
              <input {...input} placeholder={label} type={type} />
              {touched &&
                ((error && <span>{error}</span>) ||
                  (warning && <span>{warning}</span>))}
            </div>
          </div>
        )

        console.log(this.props);
        return (
          <form onSubmit={handleSubmit}>
          <Field
          name="firstName"
          type="text"
          component={renderField}
          label="firstName"
        />
        <Field
        name="lastName"
        type="text"
        component={renderField}
        label="lastName"
      />
        <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
      />
            <div>
              <label>Sex</label>
              <div>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="male"
                  />{' '}
                  Male
                </label>
                <label>
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    value="female"
                  />{' '}
                  Female
                </label>
              </div>
            </div>
            <div>
              <label>Favorite Color</label>
              <div>
                <Field name="favoriteColor" component="select">
                  <option />
                  <option value="ff0000">Red</option>
                  <option value="00ff00">Green</option>
                  <option value="0000ff">Blue</option>
                </Field>
              </div>
            </div>
            <div>
              <label htmlFor="employed">Employed</label>
              <div>
                <Field
                  name="employed"
                  id="employed"
                  component="input"
                  type="checkbox"
                />
              </div>
            </div>
            <div>
              <label>Notes</label>
              <div>
                <Field name="notes" component="textarea" />
              </div>
            </div>
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>
        )
    };
};

const registerForm = {
    form: 'register',
    validate
  }

  export default reduxForm(registerForm)(SignUpForm)