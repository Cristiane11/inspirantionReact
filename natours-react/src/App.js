import React, {Component} from 'react';
import {Switch, Router} from 'react-router-dom';
import Home from './components/Home';
//import Header from './components/Header';
//import './App.css';

function App(){
  return(
    <div className="App">
         <Router path="/" component={Home}/>
    </div>
  ); 
}

export default App;