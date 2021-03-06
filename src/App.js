import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 29},
    {name: 'MaStephaniex', age: 26}
  ]
  }
switchNameHandler = (name)=>{
  this.setState({
    persons: [
    {name: name, age: 28},
    {name: 'Manu', age: 29},
    {name: 'Stephaniex', age: 27}
  ]
  })
}

nameChanged = (event)=>{
  this.setState({
    persons: [
    {name: 'Maximillian', age: 28},
    {name: event.target.value, age: 29},
    {name: 'Stephaniex', age: 27}
  ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>
          React App
        </h1>
        <button onClick={this.switchNameHandler.bind(this,"max!")}>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name} 
        age={this.state.persons[0].age} > hobby is biking </Person>
        <Person 
        name = {this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,"max")} 
        change={this.nameChanged}/>
        <Person 
        name = {this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
