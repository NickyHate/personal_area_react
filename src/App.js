import React, { Component } from "react";
import Auth from "./components/auth";
import Contacts from "./components/contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasAccount: false,
      key: "",
      value: "",
      name: "",
    };
  }
  componentDidMount() {    
    const db = firebase.database();
    const name = db.ref("name");
    name.on("value", (elem) => {
      this.setState({ name: elem.val() });
    });
    
      
    
  }
 
  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  createAccount = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error) {
          alert(error);
        }
      });
  };

  getData = () => {
    const db = firebase.database();
    const accounts = db.ref("accounts");
    accounts.on("value", (elem) => console.log(elem.val()));
  };

  sendData = () => {
    const { key, value } = this.state;
    const db = firebase.database();
    db.ref(key).push(value);
  };

  signIn = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({ hasAccount: true });
      })
      .catch((error) => alert(error));
  };

  render() {
    const { hasAccount, users } = this.state;
       
    return (
      <div className="container">
        {hasAccount ? (
          <Contacts />
        ) : (
          <Auth
            handleChange={this.handleChange}
            createAccount={this.createAccount}
            signIn={this.signIn}
            sendData={this.sendData}
          />
        )}
      </div>
    );
  }
}
