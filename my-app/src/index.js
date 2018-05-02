import React from 'react';
import ReactDOM from 'react-dom';
import {Segment } from 'semantic-ui-react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Route from 'react-router-dom/Route';
import SearchResults from './pages/SearchResults';
import LoginForm from './components/LoginLayout';
import RegisterForm from './components/RegisterForm';
import NotFound from './pages/NotFound';
import 'semantic-ui-css/semantic.min.css';


import MovieDetails from './pages/MovieDetails';
import ProfileDetailsPage from './pages/ProfileDetailsPage';


const SegmentStyle = {
    flex: 1,
    marginLeft: "16em",
    marginRight: "16em",
};

ReactDOM.render(
    <Router>
        <Segment raised style={SegmentStyle}>
            <Switch>
                <Route path='/' exact render={
                    () => {
                        return (
                        <Home/>
                    );
                    }
                } />
                <Route path='/search' exact render={
                    () => {
                        return (<SearchResults />);
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
                <Route path='/movieDetails' exact render={
                    () => {
                        return (<MovieDetails />);
                    }
                } />
                <Route path='/profileDetails' exact render={
                    () => {
                        return (<ProfileDetailsPage />);
                    }
                } />
                <Route component={NotFound} />
            </Switch>
        </Segment>
    </Router>
    , document.getElementById('root')
);

registerServiceWorker();
