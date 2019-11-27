import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import HeaderPage from '../header/header-page'
// import { Route, Link } from 'react-router-dom'
// import { getItem, setItem, clearAll } from '../components/storageservice'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   postList: [],
    }
  }

  render() {
    return (
      <div className="container">
      {/* <Form>
        <input type="text" className="form-control" id="FormInput">     
        <div className="col-auto my-1">
          <Button type="submit" className="btn btn-primary">Search</Button>
        </div>
        </Form> */}

        <Form inline>
          <FormGroup className=".col">
            <Input className=".col-sm" type="text" name="search" id="search" placeholder="" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>

      </div>
    )
  }
}
export default SearchPage;