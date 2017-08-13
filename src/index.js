import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobsContainer from './Components/JobsContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JobsContainer />, document.getElementById('root'));
registerServiceWorker();
