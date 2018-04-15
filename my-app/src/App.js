import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SearchResults from './SearchResults';
import LoginForm from './LoginLayout';
import Home from './Home.js';
import './App.css';
import RegisterForm from './RegisterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/search?keywords=pirate&page=1')
      .then(function (response) {
        let movieList = response.data.movies;
        let i = 1;
        movieList.forEach(function (element) {
          // remove when the response has content id.
          element.id = i++;
         // element.imageURL = require("" + element.imageURL);
        });
        this.setState({
          movies: movieList
        });
      }.bind(this));
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/search' exact render = {
              () => {
                return (<SearchResults/>);
              }
            } />
            <Route path='/home' exact render = {
              () => {
                return (<Home/>);
              }
            } />
            
            <Route path='/movies/featured' exact render = {
              () => {
                return (<h1> Featured Movies </h1>);
              }
            } />
            <Route path='/login' exact render = {
              () => {
                return (<LoginForm/>);
              }
            } />
            <Route path='/register' exact render = {
              () => {
                return (<RegisterForm/>);
              }
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

