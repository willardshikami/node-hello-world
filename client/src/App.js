import React, { Component } from 'react';
import  NavBar from './Components/NavBar';
import  Header from './Components/Header';
import  AddResource from './Components/AddResource'
import  Resources from './Components/Resources';
import './App.css';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <NavBar />
            <Header />
            <Resources />
            <Route path="/addresource" component={AddResource}></Route>
          </div>
      </Router>
    );
  }
}

export default App;
