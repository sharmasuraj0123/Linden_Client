import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchResults from "./pages/SearchResults";
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
