import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Login.scss'

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div className= "log_box">
          <h1 className="signIn"> Sign In </h1>
          <Input
            placeholder="user email address" />
            <br />
          <Input
            placeholder="password" />
            <br />
            <Link to="/user"><Button>Log In</Button></Link>

        </div>

      </div>
    )
  }

}

export default Login
