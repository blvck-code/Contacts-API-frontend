import React, {useEffect} from "react";
import ContactsComponent from './containers/Contacts';
import CreateContactComponent from './containers/CreateContact';
import LoginComponent from './containers/Login';
import RegisterComponent from './containers/Register';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import {getUser} from './redux/actions/auth'
import PrivateRoute from "./routes/PrivateRoute";


function App({getUser}) {

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/auth/register" component={RegisterComponent} />
            <Route exact path="/auth/login" component={LoginComponent} />
            <PrivateRoute exact path="/" component={ContactsComponent} />
            <PrivateRoute exact path="/contacts/create" component={CreateContactComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, {getUser})(App);
