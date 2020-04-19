import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";

class TopPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <React.Fragment>
        <div className="toppage">
          <h1 className="main-title">TopPage</h1>
          <p>Hello {this.props.users.name}!!</p>
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
