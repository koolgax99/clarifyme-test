import React, { useState, useEffect } from "react";
// import { Switch, Route, Link } from "react-router-dom";

import Chat from "./components/Chat/Chat";
// import Join from "./components/Join/Join";
import Login from "./components/Auth-Components/Login";
import Register from "./components/Auth-Components/Register";

import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Route path='/' exact component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/chat' component={Chat} />
		</Router>
	);
};

export default App;
