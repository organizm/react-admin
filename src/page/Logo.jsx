import React, { Component } from 'react';
import logo from './img/logo.png';
import './Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="logo">
     
        <img className="img-fluid rounded-circle float-left img-thumbnail mx-auto" src ={logo} alt="image user"/>
      
      </div>
    )
  }
}

export default Logo;
