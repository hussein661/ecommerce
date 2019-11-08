import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};
	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (e) {
			console.log(e.message);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						label="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">SIGN IN</CustomButton>
						<CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
