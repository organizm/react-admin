import React, { Component } from 'react';
import './RightPage.css';



class RightPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container-right">
        <div className="navbar-container bg-light">
 
          ссилка right
          <div className="row">
                    <div className="col-12 searchline">
                    <form className="form-inline ml-auto mt-2 mt-md-0">
                      <label>
                        Name: <input type="text" name="name" />
                      </label>
                      <input type="submit" value="Submit" className="form-control mr-sm-2" />
                    </form>
                            
                    </div>
                
                </div>
                <div className="row">
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
                                          <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                          </tr>
                                        </tbody>
                                      </table>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                            </div>                     

                        </div>
                    </div>

        </div>
      </div>
    )
  }
}
export default RightPage;