import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Route from 'react-router-dom/Route';
import SearchResults from './pages/SearchResults';
import LoginForm from './components/LoginLayout';
import './App.css';
import RegisterForm from './components/RegisterForm';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact render={
              () => {
                return (<Home />);
              }
            } />
            <Route path='/search' exact render={
              () => {
                return (<SearchResults />);
              }
            } />
            <Route path='/movies/featured' exact render={
              () => {
                return (<h1> Featured Movies </h1>);
              }
            } />
            <Route path='/login' exact render={
              () => {
                return (<LoginForm />);
              }
            } />
            <Route path='/register' exact render={
              () => {
                return (<RegisterForm />);
              }
            } />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
