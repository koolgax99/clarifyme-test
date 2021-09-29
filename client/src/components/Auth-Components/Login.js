import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css";
import "./Login.css";
import logo from "../../icons/logo.png";

const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};

const Login = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setMessage("");
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.login(username, password).then(
				() => {
					props.history.push(`/chat?name=${username}`);
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};

	return (
		<div className='Login'>
			{/* <div className='card card-container'> */}
			<div>
				<img src={logo} alt='profile-img' width='700px' height='500px' />
			</div>
			<Form onSubmit={handleLogin} ref={form} classname='Form'>
				<div>
					<label htmlFor='username'>Username</label>
					<Input
						type='text'
						className=' username'
						name='username'
						value={username}
						onChange={onChangeUsername}
						validations={[required]}
					/>
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<Input
						type='password'
						className=' password'
						name='password'
						value={password}
						onChange={onChangePassword}
						validations={[required]}
					/>
				</div>

				<div className='form-group Form'>
					<button className='btn btn-primary btn-block' disabled={loading}>
						{loading && (
							<span className='spinner-border spinner-border-sm'></span>
						)}
						<span>Login</span>
					</button>
				</div>

				<div className='form-group Form'>
					<button className='btn btn-primary btn-block' disabled={loading}>
						{loading && (
							<span className='spinner-border spinner-border-sm'></span>
						)}
						<span>Signup</span>
					</button>
				</div>

				{message && (
					<div className='form-group'>
						<div className='alert alert-danger' role='alert'>
							{message}
						</div>
					</div>
				)}
				<CheckButton style={{ display: "none" }} ref={checkBtn} />
			</Form>
			{/* </div> */}
			{/* </div> */}
		</div>
	);
};

export default Login;
