import React, { Component } from 'react';
import classes from  './App.css';
import Shop from './Containers/Shop/Shop'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {


  render(){
    return(
      <BrowserRouter>
      <div className={classes.App}>
          <Shop />
      </div>
      </BrowserRouter>
    )
  }
}



export default App;
