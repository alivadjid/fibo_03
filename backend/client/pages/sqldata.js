
import React, { Component } from 'react';
import axios from 'axios';


class Sqldata extends Component {
  state = {
    users:[]
  }
  componentDidMount(){
    this.getUsers();
  }

  getUsers = _ => {
        axios.get('http://localhost:3001/sqldata')
        
    .then((data) => {
      console.log(data.data.users);
      this.setState({users: data.data.users});
    })
    // .then(({response}) => this.setState({users: response.users}))
    .catch(error => console.log(error));
  }
  showData = user => <div key={user.id}>{user.date}| {user.ip}| {user.number}| {user.result}</div>;
  render() {//building react method that comes inse od react component
    const  { users } = this.state;//this.state;
    //console.log(typeof'state');
    return(//jsx code and can return only a single parent tag
    // users.map(this.showUsers)
      
      <div className="App">
        {users.map(this.showData)}
      </div>
    );
  }
}

export default Sqldata;


