import React, { Component } from 'react';
import './Navbutton.css';


export class Navbutton extends Component {
  render(){
    return (
      <div className="Navbutton">
        {this.props.text}
      </div>
    )
  };
}

export default Navbutton;
