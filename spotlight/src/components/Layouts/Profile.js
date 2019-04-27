import React, {Component} from 'react'
class Profile extends Component {

	state = {
		user: [],
		id: document.cookie
	}

	getUser = () => {
        if(document.cookie){
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
            <tbody><tr><td>First Name</td><td>{this.state.first_name}</td></tr><tr><td>Last Name</td><td>{this.state.last_name}</td></tr><tr><td>Email</td><td>{this.state.email}</td></tr><tr><td>Photo</td><td>{this.state.Photo}</td></tr></tbody></table></div></div>
		)
	}
}
export default Profile;
