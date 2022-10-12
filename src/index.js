// import React
// import React-DOM
// import App
// import css framework
// react-dom render app

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// way below is stupid. don't do that.
// ReactDOM.render(<App />, document.getElementById('root'));

// not sure what else I need at this point, so moving on