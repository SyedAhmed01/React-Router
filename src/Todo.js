import React, { Component } from 'react';

class TodoLost extends Component {
constructor(props) {
  super(props);
  this.state = {
    task: "",
    List : []
  }
this.handleclick = this.handleclick.bind(this);
}
handleclick() {
  this.setState({
    task : document.getElementById("newtask").value,
    List : this.state.List.push(this.state.task)
  })
}
render() {
    return ( 
    <p>
    <input type="text" id="newtask" />
    <input type="button" onClick={this.state.handleclick} />
    {this.state.List[1]}</p>
    );
  }  
}

class TodoList extends Component {
render() {
  return(
<ul>
  {props.task.map()}
</ul>
  )
}
}
export default TodoLost;