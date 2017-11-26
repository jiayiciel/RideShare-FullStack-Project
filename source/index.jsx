import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import User from './components/User/User.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Driver from './components/Driver/Driver.jsx';
import Passenger from './components/Passenger/Passenger.jsx';
import PassengerSearchResult from './components/PassengerSearchResult/PassengerSearchResult.jsx';
import PassengerAfterSubmit from './components/PassengerAfterSubmit/PassengerAfterSubmit.jsx';
import Logout from "./components/Logout/Logout.jsx";
// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user" component={User} />
        <Route exact path="/Mainpage" component={MainPage} />
        <Route exact path="/Driver" component={Driver} />
        <Route exact path="/Passenger" component={Passenger} />
        <Route exact path="/PassengerSearchResult" component={PassengerSearchResult} />
        <Route exact path="/PassengerAfterSubmit" component={PassengerAfterSubmit} />
      </Switch>
    </Router>,
    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
