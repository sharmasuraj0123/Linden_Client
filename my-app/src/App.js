import React, { Component } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/movies/featured')
      .then(function (response) {
        let movieList = response.data.data;
        movieList.forEach(function (element) {
          element.imageURL = require("" + element.imageURL);
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
          <Route path='/' exact render={
            () => {
              return (<HomePage movies={this.state.movies} />);
            }
          } />
          <Route path='/movies/featured' exact render={
            () => {
              return (<h1> Featured Movies </h1>);
            }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
