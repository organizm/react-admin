import React, { Component } from 'react';
import './RightPage.css';
import { Link } from 'react-router-dom';
import ListWithAddItem from './arrAdd';
import ListWithUpdateItem from './arrUpd';
import ListWithRemoveItem from './arrDel';

class RightPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // postList: [],
    }

    
  }

  
  
  render() {
    return (
      <div className="container-right">
                    
        <ListWithAddItem />

        <ListWithUpdateItem />

        <ListWithRemoveItem />

        <div className="navbar-container bg-light">
          
          <div className="row topbody">
            <div className="col-6">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>                   
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
              </div>                     

            </div>
          </div>
          <div className="row downbody"> 
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="card-link">Card link</Link>
                  <Link to="#" className="card-link">Another link</Link>
                </div>
              </div>                     

            </div> 
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title 2</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle 2</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="card-link">Card link 2</Link>
                  <Link to="#" className="card-link">Another link 2</Link>
                </div>
              </div>                     

            </div> 
          </div>
        </div>
      </div>
    )
  }
}
export default RightPage;