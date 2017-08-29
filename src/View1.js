import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 

class View1 extends Component {

constructor(props) {
    super(props);
    this.state = {person: []};
  }

   componentDidMount() {
    this.UserList();
  }

UserList(){
    return $.getJSON('https://dawndeal-manjulrajeevpathak.c9users.io/api/v1/getQuint')
     .then((data) => {
        console.log(data[0]);
        this.setState({ person: data[0] });
      });
  }

  render() {

  const name = this.state.person;

    return (

      <div className="View1">

      <select>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>

      <span>{name.name}, {this.state.person.name}</span>

      </div>
    );
  }
}

export default View1;
