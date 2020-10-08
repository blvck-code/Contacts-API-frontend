import React, { useState, useEffect } from "react";
import {
  Form,
  Grid,
  Button,
  Header as SemanticHeader,
  Segment,
  Message,
} from "semantic-ui-react";
import Header from "../../component/Header";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth";

const LoginUI = ({
  data,
  error,
  login,
  loading,
  form: { form, onChange, loginFormValid },
}) => {
  const [fieldErrors, setFieldErrors] = useState({});

  const history = useHistory();

  useEffect(() => {
    if (data) {
      if (data.user && data.token) {
        history.push("/");
      }
    }
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  document.title = "Contacts | Login";

  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Login</SemanticHeader>
          <Segment>
            {error && <Message content={error?.detail} negative />}

            <Form onSubmit={onSubmit}>
              <Form.Field>
                <Form.Input
                  value={form.username || data?.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                />
                <small>
                  Sample username: <b>rootuser</b>
                </small>
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  placeholder="Password"
                  label="Password"
                  type="password"
                />
              </Form.Field>
              <small>
                Sample password: <b>password</b>
              </small>
              <Button
                onClick={onSubmit}
                disabled={loginFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit">
                Sign In
              </Button>
            </Form>
          </Segment>
          <Segment>
            Need an account ? <Link to="/auth/register">Register</Link>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.authState.loading,
  error: state.authState.error,
  data: state.authState.data,
});

export default connect(mapStateToProps, { login })(LoginUI);
