import React, { Component } from 'react';
import './Navbar.css';
import Navbutton from './Navbutton'
import Navlogo from './Navlogo'


export class Navbar extends Component {
  render(){
    return (
      <header className="Navbar">
        <Navbutton text="La Chorale"></Navbutton>
        <Navlogo></Navlogo>
        <Navbutton text="Chansons d'avril"></Navbutton>
      </header>
    )
  };
}

export default Navbar;
