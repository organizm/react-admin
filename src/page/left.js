import React, { Component } from 'react'
import './left.css';
import { Route, Link } from 'react-router-dom'

class LeftPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container">
        <div className="navbar-container bg-light">
          ссилка
          {/* <!-- Вертикальное меню --> */}
          <nav className="navbar navbar-expand-md navbar-light">
            {/* <Link className="navbar-brand" href="#">Navbar</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              {/* <!-- Пункты вертикального меню --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  ссилка 2
                  {/* <Link className="nav-link" href="#link-1">Ссылка 1</Link> */}
                </li>
                <li clasclassNames="nav-item">
                ссилка 3
                  {/* <Link className="nav-link" href="#link-2">Ссылка 2</Link> */}
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