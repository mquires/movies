import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';

import AppContainer from "./app/container";

ReactDOM.render(<AppContainer store={store} />, document.getElementById("root"));