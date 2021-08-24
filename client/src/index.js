import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import wines from './wines.json';


ReactDOM.render(<App wines={wines} />, document.getElementById('app'));
