import React, {useEffect} from 'react'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';
import Store from './Store';
import { loadUser } from './actions/authAction';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import UpdateContactForm from './components/contact/UpdateContactForm';

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, [])
  return (
    <React.Fragment>
      <Router>
        <Provider store={Store}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <PrivateRoute path="/Dashboard" exact component={Dashboard} />
          <PrivateRoute path="/UpdateContact" exact component={UpdateContactForm} />
        </Switch>
        </Provider>
      </Router>
    </React.Fragment>
  )
}

export default App
