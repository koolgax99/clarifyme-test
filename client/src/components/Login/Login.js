import React, { Component } from "react";
import "./Login.css";

class EntryPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: "signUp",
		};
	}

	changeView = (view) => {
		this.setState({
			currentView: view,
		});
	};

	currentView = () => {
		switch (this.state.currentView) {
			case "signUp":
				return (
					<form>
						<h2>Sign Up!</h2>
						{/* <fieldset> */}
						<ul>
							<li>
								<label for='username'>Username:</label>
								<input type='text' id='username' required />
							</li>
							<li>
								<label for='email'>Email:</label>
								<input type='email' id='email' required />
							</li>
							<li>
								<label for='password'>Password:</label>
								<input type='password' id='password' required />
							</li>
						</ul>
						{/* </fieldset> */}
						<button>Submit</button>
						<button type='button' onClick={() => this.changeView("logIn")}>
							Have an Account?
						</button>
					</form>
				);
				break;
			case "logIn":
				return (
					<form>
						<h2>Welcome Back!</h2>
						{/* <fieldset> */}
						<ul>
							<li>
								<label for='username'>Username:</label>
								<input type='text' id='username' required />
							</li>
							<li>
								<label for='password'>Password:</label>
								<input type='password' id='password' required />
							</li>
						</ul>
						{/* </fieldset> */}
						<button>Login</button>
						<button type='button' onClick={() => this.changeView("signUp")}>
							Create an Account
						</button>
					</form>
				);
				break;

			default:
				break;
		}
	};

	render() {
		return <section id='entry-page'>{this.currentView()}</section>;
	}
}

export default EntryPage;
// ReactDOM.render(<EntryPage />, document.getElementById("app"));
