import React from 'react';
import HomePage from './page/homepage/homepage';
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import ShopPage from './page/shop/shopPage';
import {connect} from 'react-redux'
import Header from './components/header/header';
import SignInAndSignUp from './page/auth/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './page/checkout/checkout';

class App extends React.Component {

	unSubscribeFromAuth = null;
	componentDidMount() {
		const {setCurrentUser} = this.props
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					})
				});
			}
			setCurrentUser(userAuth)
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/auth" render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
					<Route exact path="/checkout" component={Checkout} />} />

				</Switch>
			</div>
		);
		}
}

const mapStateToProps = createStructuredSelector({
	currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
