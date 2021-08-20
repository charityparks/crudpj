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
           console.log(snapshot.val())
       });
   }
}

