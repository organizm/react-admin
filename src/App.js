import React from 'react';
// import './App.css';
import LeftPage from './page/LeftPage';
import RightPage from './page/RightPage';
import Search from './page/Search';
import LeftIcon from './page/LeftIcon';
import LocalStore from './components/LocalStore';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <LeftIcon /> 
        </div>
        <div className="col-sm-9">
          <Search /> 
        </div>
       
      </div>
      <div className="row">
        <div className="col-sm-3">
          <LeftPage /> 
        </div>
        <div className="col-sm-9">
          <RightPage /> 
        </div>
       
      </div>

      {/* <LocalStore /> */}
    </div>
  );
}

export default App;
