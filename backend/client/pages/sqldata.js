
import React, { Component } from 'react';
import Axios from 'axios';
import Getip from './getip';

/** Show SQL data from client IP */
class Sqldata extends Component {
  
  state = {
    users:[]
  }
  componentDidMount(){
    this.getUsers();
  };
  
  
  getUsers = _ => {
    Getip().then(ip=> {
        Axios.get('http://localhost:3001/sqldata', {
          params: {
            ID: ip
          }
        })
        
    .then((data) => {
      //console.log(data.data.users);
      this.setState({users: data.data.users});
    })
    
    .catch(error => console.log(error));
  })
  }
  showData = user => <div key={user.id}> {user.date} {user.ip} {user.number} {user.result}</div>;
  render() {
    const  { users } = this.state;
    
    return(
    
      
      <div className="App">
        {users.map(this.showData)}
      </div>
    );
  }
}

export default Sqldata;


