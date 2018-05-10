import React from 'react';
import ReactDOM from 'react-dom';
import { Segment } from 'semantic-ui-react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Route from 'react-router-dom/Route';
import SearchResults from './pages/SearchResults';
import LoginForm from './components/LoginLayout';
import RegisterForm from './components/RegisterForm';
import NotFound from './pages/NotFound';
import 'semantic-ui-css/semantic.min.css';
import Cookies from 'universal-cookie';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import MovieDetails from './pages/MovieDetails';
import AboutUs from './pages/AboutUs';
import ProfileDetails from './pages/ProfileDetails';
import CastDetails from './pages/CastDetails';


const SegmentStyle = {
    flex: 1,
    marginLeft: "15em",
    marginRight: "15em",
};


ReactDOM.render(
    <Router>
        <Segment inverted raised style={SegmentStyle}>
            <NavBar />
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

                <Route path='/movie/:id' exact render={
                    () => {
                        return (<MovieDetails />);
                    }
                } />
                <Route path='/profileDetails' exact render={
                    () => {
                        return (<ProfileDetails />);
                    }
                } />
                <Route path='/cast/:id' exact render={
                    () => {
                        return (<CastDetails />);
                    }
                } />
                <Route path='/about' exact render={
                    () => {
                        return (<AboutUs />);
                    }
                } />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Segment>
    </Router>
    , document.getElementById('root')
);

registerServiceWorker();
