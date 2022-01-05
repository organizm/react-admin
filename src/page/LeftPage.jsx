import React, { Component } from 'react';
import './LeftPage.css';
import { Link } from 'react-router-dom';

class LeftPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
      //   postList: [],
      }
    }
  
    render() {
      return (
        <div className="container-left">
          <div className="col-md-12 col-lg-12 navbar-container bg-light">
            {/* <!-- Вертикальное меню --> */}
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to ="/"> Menu</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                {/* <!-- Пункти вертикального меню --> */}
                <ul className="navbar-nav">  
                  <li className="nav-item">
                    <Link className="nav-link" to ="#link-1">посилання 1</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to ="/page/Contacts">Контакти</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to ="#link-3">посилання 3</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to ="#link-4">посилання 4</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to ="#link-5">посилання 5</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )
    }
  }
  export default LeftPage;