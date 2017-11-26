import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PassengerSearchResult extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <h1> this is PassengerSearchResult page</h1>
        <Link to="/Logout"><Button>Logout</Button></Link>
      </div>
    )
  }

}

export default PassengerSearchResult
