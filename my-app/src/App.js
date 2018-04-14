import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MoviePage from './pages/MoviePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import Cookies from 'universal-cookie';

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
        let i = 1;
        movieList.forEach(function (element) {
          // remove when the response has content id.
          element.id = i++;
          element.imageURL = require("" + element.imageURL);
        });
        this.setState({
          movies: movieList
        });
      }.bind(this));
  }

  render() {
    const cookies = new Cookies();
    cookies.set('username', 'Krishna');
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact render = {
              () => {
                return (<HomePage movies={this.state.movies} />);
              }
            } />
            <Route path='/search' exact render = {
              () => {
                return (<SearchResultsPage />);
              }
            } />
            <Route path='/movies/featured' exact render = {
              () => {
                return (<h1> Featured Movies </h1>);
              }
            } />
            <Route path='/movies/:contentid' exact render = {
              () => {
                return (<MoviePage />);
              }
            } />
            <Route component = {NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
