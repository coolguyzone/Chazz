import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} id="login">
      <div className="login-field">
        <label>E-mail</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </div>
    </div>

    <div className="login-field">
      <label>Password</label>
      <div>
        <Field name="password" component="input" type="password" placeholder="Password" />
      </div>
    </div>

    <div className="login-field">
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </div>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm;
