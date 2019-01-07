import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Users from './Users.js';
import Footer from './Footer.js';
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
  super();

  this.state = {
    show: true
   }
  this.handleshow = this.handleshow.bind(this);
  }
  handleshow() {
    this.setState((prevState) => {
      return{
      show : !prevState.show
    }})
  }
render() { 
let text = this.state.show ? "Hide" : "Show";
  return(
    <div>
  { this.state.show ? null : <Header/> }
  <Switch>
  <Route exact path="/" component={Main}/>
  <Route exact path="/Main" component={Main}/>
  <Route exact path="/Users" component={Users}/>
  </Switch>
  <button onClick={this.handleshow}>{text}</button>
  { this.state.show ? <Footer /> : null }
  </div>
);}}

export default App;
