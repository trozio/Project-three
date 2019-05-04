import React, {Component} from 'react'
class Profile extends Component {

	state = {
		user: [],
		id: document.cookie
	}

	getUser = () => {
		fetch("/api/profile", {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					_id: this.state.id
				})
			})
			.then(res => res.json())
			.then(user => {
				this.setState({user});
			});
	}

	componentDidMount() {
		this.getUser();
	};


	render() {
		return ( <div className = "container">
		{this.state.user.map( user =>
			<div className = "jumbotron mt-5">
			<div className = "col-sm-8 mx-auto">
			<h1 className = "text-center" > PROFILE </h1></div>
			<table className = "table col-md-6 mx-auto">
			<tbody><tr><td>Name</td><td>{user.name}</td></tr><tr><td>Email</td><td>{user.email}</td></tr></tbody></table></div>
		)}
			</div>


		)
	}
}
export default Profile;
