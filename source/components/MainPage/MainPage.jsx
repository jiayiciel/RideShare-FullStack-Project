import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from "./MainPage.scss"

class MainPage extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <h1> this is Mainpage</h1>
        <Link to="/Logout"><Button>Logout</Button></Link>
        <div className="select">
          <h3> You are... </h3>
          <div className="select-buttons">
              <Link to="/Driver"><Button>Driver</Button></Link>
              <Link to="/Passenger"><Button>Passenger</Button></Link>
          </div>
        </div>
      </div>
    )
  }

}

export default MainPage
