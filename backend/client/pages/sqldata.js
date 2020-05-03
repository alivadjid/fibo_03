
import React, { Component } from 'react';
import axios from 'axios';
import getip from './getip';


class Sqldata extends Component {
  
  state = {
    users:[]
  }
  componentDidMount(){
    this.getUsers();
  };
  
  
  getUsers = _ => {
    getip().then(ip=> {
        axios.get('http://localhost:3001/sqldata', {
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
  render() {//building react method that comes inse od react component
    const  { users } = this.state;
    
    return(//jsx code and can return only a single parent tag
    
      
      <div className="App">
        {users.map(this.showData)}
      </div>
    );
  }
}

export default Sqldata;


