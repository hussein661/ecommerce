import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
	state = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
            alert('passwords do not match')
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
		} catch (error) {
			console.log(error);
		}
    };
    
    handleChange = event =>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign Up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={this.state.displayName}
						label="Name"
						onChange={this.handleChange}
					/>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						label="Email"
						onChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						label="Password"
						onChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={this.state.confirmPassword}
						label="Confirm Password"
						onChange={this.handleChange}
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
