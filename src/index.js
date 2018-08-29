import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";


// import the Router component
import history from "./history";
import { Router } from "react-router-dom";

// import the App component
import App from "./App";
import store from './data/Store';
import Articles from "./containers/Articles/Articles";



// create some dummy articles
// store them in an object
// so that we can easily reference each one by its id



    
    ReactDOM.render(
        <Provider store={ store }>
            <Router history={ history }>
                <App />
            </Router>
        </Provider>,
        document.getElementById("root"),
    );

