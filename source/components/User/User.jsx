import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class User extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <h1> this is User page</h1>
          <Link to="/MainPage">
            <Button>
              MainPage
            </Button>
          </Link>
          <Link to="/">
            <Button>
              Logout
            </Button>
          </Link>
      </div>

    )
  }

}

export default User
