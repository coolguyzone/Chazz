import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { logUserIn } from '../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ logUserIn }, dispatch);
};

class LoginForm extends Component {

  render(props) {
     const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let x = this.props.formData.login.values;
          this.props.logUserIn(x.email, x.password);
        }}
        id="login"
      >
        <div className="login-field">
          <label>E-mail</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
      </div>

      <div className="login-field">
        <label>Password</label>
        <div>
          <Field name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="login-field">
        <button type="submit">Submit</button>
      </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);
