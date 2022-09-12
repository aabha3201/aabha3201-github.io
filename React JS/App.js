import React, { Component } from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
import List from './List.js'
class App extends Component { 
  constructor(){ 
    super() 
    this.state = { 
    } 
  } 
  render() { 
    return ( 
      <div>
        <List />
      </div>
    ); 
    } 
} 
export default App
