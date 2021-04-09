import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "App/App.jsx";

// Mount the app to the mount point.
const root = document.getElementById("app");
ReactDOM.render(<App />, root);
