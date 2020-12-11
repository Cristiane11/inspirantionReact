import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import Home from './components/Home';
//import Header from './componets/Header';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
        <Router path="/"component={Home}/>
    
    </div>
  );
  }
}

export default App;
