import React, { Component } from 'react';
import firebase from 'firebase/app';

class User extends Component {
   constructor(props) {
       super(props);
       this.state = {
           users: []
       };
   } 
   componentDidMount(){
       firebase.database().ref('/')
       .on('value',snapshot => {
           let returnArr = [];
           snapshot.forEach(data => {
               var user =data.val();
               user['key'] = data.key;
               returnArr.push(user);
           });
           this.setState({
               users: returnArr
           })
        });
   }
   render(){
       return (
           <div>

           </div>
       );
   }
}

export default User;

