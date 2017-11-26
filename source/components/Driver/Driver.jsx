import React, { Component } from 'react'
import { Button, Input, Icon,Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from "./Driver.scss"
class Driver extends Component {
  constructor(){
    super();
    this.state={
      post_Click:false
    };
    this.handlerClick= this.handlerClick.bind(this);
  }
  handlerClick(){
    this.setState(prevState => ({
      post_Click:!prevState.post_Click
    }));
  }
  render() {
    const departure =[{key:"airport", value:"airport", text:"O'hare"},
                      {key:"UIUC", value:"UIUC", text:"UIUC"},
                    ];
    const destination =[{key:"airport", value:"airport", text:"O'hare"},
                      {key:"UIUC", value:"UIUC", text:"UIUC"},
                    ];
    const seats_number =[{key:"4",value:"4",text:'4'},
                          {key:"6",value:"4",text:'6'},
                        ];
    return(
      <div>
        <h1> this is Driver page</h1>
        <Link to="/Logout"><Button>Logout</Button></Link>
        <Link to="/MainPage"><Button>MainPage</Button></Link>

        <div className="Driver_filter">
          <Dropdown placeholder="Departure" selection options={departure} />
          <Dropdown placeholder="Destination" selection options={destination} />
          <Dropdown placeholder="Seats Available" selection options={seats_number} />


            <Link to="/user"><Button onClick={this.handlerClick}>Post</Button></Link>

        </div>
      </div>
    )
  }

}

export default Driver
