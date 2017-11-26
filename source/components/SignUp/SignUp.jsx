import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from "./SignUp.scss"
class SignUp extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div className="sign-box">
        <h1 className="signUp"> Sign Up </h1>
        <Input
          placeholder="user email address" />
          <br />
        <Input
          placeholder="password" />
          <br />
          <Link to="/login"><Button>Submit</Button></Link>

      </div>
    )
  }

}

export default SignUp
