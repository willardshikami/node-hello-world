import React, { Component } from 'react';
import  NavBar from './Components/NavBar';
import  Header from './Components/Header';
import  Resources from './Components/Resources';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <Header />
       <Resources />
      </div>
    );
  }
}

export default App;
