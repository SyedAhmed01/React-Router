import React, { Component } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

class Main extends Component {
render() {
    return (
    <ul>
      <li><p>ahmer</p></li>
      <li><Link to="/Users">Users</Link></li> 
    </ul>
    );
  }  
}

export default Main;