import React, { Component } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

class Users extends Component {
render() {
    return (
    <ul>
      <li><p>Users</p></li>
      <li><Link to="/">Main</Link></li>
    </ul>
    );
  }  
}

export default Users;