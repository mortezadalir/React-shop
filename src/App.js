import React, { Component } from 'react';
import classes from  './App.css';
import Shop from './Containers/Shop/Shop'


class App extends Component {


  render(){
    return(
      <div className={classes.App}>
          <Shop />
      </div>
    )
  }
}



export default App;
