import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListExampleVerticallyAligned from  "./ListExampleVerticallyAligned";
import ModalBasicExample from  "./ModalBasicExample";
import SearchResults from "./SearchResults";
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
