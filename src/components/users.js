import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";
import { Link } from "react-router-dom";

class TopPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <React.Fragment>
        <div className="toppage__container">
          <h1>TopPage</h1>
          <p className="toppage__message">Hello {this.props.users.name}!!</p>
          <div className="toppage__navigation">
            <ul>
              <li>
                <Link to="/top">Top</Link>
              </li>
              <li>
                <Link to="/top">DashBoard</Link>
              </li>
              <li>
                <Link to="/top">Profile</Link>
              </li>
              <li>
                <Link to="/top">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
