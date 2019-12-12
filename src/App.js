import React from 'react';
// import './App.css';
import LeftPage from './page/LeftPage';
import RightPage from './page/RightPage';


function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-sm-3"><LeftPage></LeftPage> </div>
        <div className="col-sm-9"><RightPage></RightPage> </div>
       
      </div>


    </div>
  );
}

export default App;
