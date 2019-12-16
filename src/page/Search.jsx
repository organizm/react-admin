import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container-Search">
                    

        <div className="navbar-container bg-light">

          <div className="row">
            <div className="col-12 searchline">
              <form className="form-inline ml-auto mt-2 mt-md-0">
                      
                <input className="col-11" type="text" name="name" />
                      
                <input type="submit" value="Submit" className="form-control mr-sm-2" />
                      
              </form>
                            
            </div>
                
          </div>
          
                            


        </div>
      </div>
    )
  }
}
export default Search;
