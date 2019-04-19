import React, {Component} from 'react'
class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
 
    }
    render() {
        return (
            <div className="container">
              <div className= "jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                  <h1 className="text-center">PROFILE</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                  <tbody>
                      <tr>
                          <td>First Name</td>
                          <td>{this.state.first_name}</td>
                      </tr>
                      <tr>
                          <td>Last Name</td>
                          <td>{this.state.last_name}</td>
                      </tr>
                      <tr>
                          <td>Email</td>
                          <td>{this.state.email}</td>
                      </tr>
                      <tr>
                          <td>Photo</td>
                          <td>{this.state.Photo}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        )
    }
}
export default Profile;