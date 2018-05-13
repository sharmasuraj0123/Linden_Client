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
// import Cookies from 'universal-cookie';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import MovieDetails from './pages/MovieDetails';
import TvShowDetails from './pages/TvShowDetails';
import SeasonDetails from './pages/SeasonDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LindenCritics from './pages/LindenCritics';
import Admin from './pages/Admin';


import TermsAndCondition from './pages/TermsAndCondition';
import ProfileDetails from './pages/ProfileDetails';
import CastDetails from './pages/CastDetails';
import AccountVerification from './pages/AccountVerification';
import ResendVerification from './pages/ResendVerification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SegmentStyle = {
    flex: 1,
    marginLeft: "15em",
    marginRight: "15em",
};


ReactDOM.render(
    <Router>
        <Segment inverted raised style={SegmentStyle}>
            <ToastContainer />
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
                <Route path='/tvShow/:id' exact render={
                    () => {
                        return (<TvShowDetails />);
                    }
                } />
                <Route path='/tvShow/:tvShowId/season/:seasonNumber' exact render={
                    () => {
                        return (<SeasonDetails />);
                    }
                } />
                <Route path='/user/:id' exact render={
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
                <Route path='/contactUs' exact render={
                    () => {
                        return (<ContactUs />);
                    }
                } />
                <Route path='/terms' exact render={
                    () => {
                        return (<TermsAndCondition />);
                    }
                } />
                <Route path='/lindenCritics' exact render={
                    () => {
                        return (<LindenCritics />);
                    }
                } />
                <Route path='/verify/:userId/:token' exact render={
                    () => {
                        return (<AccountVerification />);
                    }
                } />
                <Route path='/resendVerify' exact render={
                    () => {
                        return (<ResendVerification />);
                    }
                } />
                <Route path='/admin' exact render={
                    () => {
                        return (<Admin />);
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
