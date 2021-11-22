import React, { Component } from 'react';
import './App.css';


import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';


import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Order from './components/Order'
import Warehouse from './components/Warehouse'
import Upload from './components/Upload'
import firebase from './config/firebase'
import InStorePage from './components/InStorePage';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
     
      user: {}
    }
    
  }
  

  componentDidMount() {
    
    this.authListener()
    
  }


  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }


  render() {
    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
        </div>

      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/Order" component={Order} />
          <Route path="/Warehouse" component={Warehouse} />
          <Route path="/Upload" component={Upload} />
          <Route path="/InStorePage" component={InStorePage} />
        </div>
      </div>
    )
  }
}



export default App




