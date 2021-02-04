import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';

import App from "./app";

ReactDOM.render(<App store={store} />, document.getElementById("root"));