import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 29},
      {name: 'Atwau', age: 21},
      {name: 'Arereng', age: 12}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () =>{
    //console.log('Was Clicked');
    this.setState({persons: [
      {name: 'Polo Atwau', age: 29},
      {name: 'Atwau', age: 21},
      {name: 'Arereng', age: 12}
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>Atwau is calling</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <p className="App-intro">
          My name is Arereng Jemimah. Welcome, and hello!
        </p>
        <h3>This is the a successful surge build</h3>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is atwau calling'));
  }
}

export default App;
