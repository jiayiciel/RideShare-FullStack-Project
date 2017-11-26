import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

class Home extends Component {

    render() {
        return(
          <div>
            <h1> Home Page</h1>
            <Link to="/signup"><Button>sign up</Button></Link>
            <Link to="/login"><Button>login</Button></Link>
          </div>
        )
    }
}

export default Home
