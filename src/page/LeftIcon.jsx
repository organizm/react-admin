import React, { Component } from 'react';
import './LeftIcon.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';



class LeftIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container-Icon">
                    

        <div className="navbar-container bg-light">
          <div className="name">Назва Проекту</div> 
          <Link to="#"><Logo /></Link>
                        
          <h5>LOGIN NAME</h5>
          <h6>myemail@super.com</h6>                


        </div>
      </div>
    )
  }
}
export default LeftIcon;