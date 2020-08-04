import React, { Component } from "react";
import ContactItem from "./contactitem";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ users: res });
      });
  }

  removeContact = (user) => {
    const updateUsers = this.state.users.filter((item) => {
      return item.id !== user.id
    });
    this.setState({
      users: updateUsers,
    });
  };

  render() {
    return (
      <div className="row">
        {this.state.users.map((user) => {
          return (
            <div className="col-9" key={user.id}>
              <ContactItem user={user} removeContact={this.removeContact}/>
            </div>
          );
        })}
      </div>
    );
  }
}
