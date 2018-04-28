import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Route from 'react-router-dom/Route';
import SearchResults from './pages/SearchResults';
import LoginForm from './components/LoginLayout';
import RegisterForm from './components/RegisterForm';
import NotFound from './pages/NotFound';
import 'semantic-ui-css/semantic.min.css';



const appStyle = {
    'textAlign': 'center'
};

ReactDOM.render(
    <Router>
        <div style={appStyle}>
            <Switch>
                <Route path='/' exact render={
                    () => {
                        return (<Home/>);
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
                       
                    }
                } />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root')
);

registerServiceWorker();
