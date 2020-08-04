import React, { Component } from "react";

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

  render() {
    return (
      <>
        <div className="row">
          {this.state.users.map((user) => (
            <>
              <div className="col-9">
                <div
                  className="card card-default"
                  id="card_contacts"
                  key={this.state.users.id}
                >
                  <div
                    id="contacts"
                    className="panel-collapse collapse show"
                    aria-expanded="true"
                  >
                    <ul className="list-group pull-down" id="contact-list">
                      <li className="list-group-item">
                        <div className="row w-100">
                          <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img
                              src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
                              alt="Mike Anamendolla"
                              className="rounded-circle mx-auto d-block img-fluid"
                            />
                          </div>
                          <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span
                              className="fa fa-mobile fa-2x text-success float-right pulse"
                              title="online now"
                            ></span>
                            <label className="name lead">
                              {`Name: ${user.name}`}
                            </label>
                            <br />
                            <span
                              className="fa fa-map-marker fa-fw text-muted"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="5842 Hillcrest Rd"
                            ></span>
                            <span className="text-muted">{`Street: ${user.address.street}`}</span>
                            <br />
                            <span
                              className="fa fa-phone fa-fw text-muted"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="(870) 288-4149"
                            ></span>
                            <span className="text-muted small">{`Phone: ${user.phone}`}</span>
                            <br />
                            <span
                              className="fa fa-envelope fa-fw text-muted"
                              data-toggle="tooltip"
                              data-original-title=""
                              title=""
                            ></span>
                            <span className="text-muted small text-truncate">
                              {`Email: ${user.email}`}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <button type="button" class="btn btn-primary">
                  Delete contact
                </button>
                <button type="button" class="btn btn-primary">
                  Edit contact
                </button>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
