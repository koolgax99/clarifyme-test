import React from "react";

import Login from "../../components/Login/Login";
import "./Homepage.css";
import Logo from "./../../assets/logo.png";
const Homepage = () => {
	return (
		<div className='Main'>
			<div className='leftside'>
				<img src={Logo} className='logo' />
			</div>

			<div className='rightside'>
				{/* <h1>Login<//h1> */}
				<Login />
			</div>
		</div>
	);
};

export default Homepage;
