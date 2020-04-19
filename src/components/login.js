import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postLogin } from "../actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    localStorage.removeItem("token");
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return touched && error ? (
      <TextField
        error
        type={type}
        label={label}
        defaultValue={label}
        helperText={error}
        fullWidth={true}
        {...input}
      />
    ) : (
      <TextField label={label} type={type} fullWidth={true} {...input} />
    );
  }

  async onSubmit(values) {
    await this.props.postLogin(values);

    if (this.props.login.isSuccess && this.props.login.token) {
      localStorage.setItem("token", this.props.login.token);
      this.props.history.push("/top");
    } else {
      console.log("Failure Login...");
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <div className="login__container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="login__textfield">
            <Field
              label="USERID"
              name="userId"
              type="text"
              component={this.renderField}
            />
          </div>
          <div className="login__textfield">
            <Field
              label="PASSWORD"
              name="passWord"
              type="password"
              component={this.renderField}
            />
          </div>
          <div className="login__submit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={pristine || submitting || invalid}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.userId) errors.userId = "enter a userID please.";
  if (!values.passWord) errors.passWord = "enter a password please.";

  return errors;
};

const mapStateToProps = (state) => ({ login: state.login });
const mapDispatchToProps = { postLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ validate, form: "loginForm" })(Login));
