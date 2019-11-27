import React, { Component } from 'react'
import CenterPage from './center'
import SearchPage from './search'
import LeftPage from './left'
import RightPage from './right'
// import { Route, Link } from 'react-router-dom'
// import { getItem, setItem, clearAll } from '../components/storageservice'

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container-fluid"> 
        <div className="container">
          <div className="row">
            <div className="col-sm-3"> 
              <div className="left-side">
                <LeftPage />
              </div>
            </div> 
            <div className="col-sm-8"> 
              <div className="row">
                <div className="col-sm-8">
                  <div className="center-side">
                    <SearchPage /> 
                    <CenterPage />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="right-side">
                    <RightPage />
                  </div>
                </div>
              </div>    
            </div> 
          </div>     
              
        {/* End */}
        </div> 
      </div>
    )
  }
}
export default AdminPage;