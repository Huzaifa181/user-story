import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';

function App() {
  return (
    <div className='app'>
        <Switch>
        {/* <Route exact path="/" render={()=><Layout/>}/> */}
        {/* <Route exact path="/user-page" render={()=><Layout/>}/> */}
        </Switch>
</div>
  );
}

export default App;
