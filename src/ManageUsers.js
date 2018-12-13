import React, { Component } from 'react';
import Users from './Users';
import AddNewUser from './AddNewUser';
import searchIcon from './assets/search-icon.png';
import Userlist from './data/users.json';
import './ManageUsers.scss';

class ManageUsers extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }
  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  render() {
    const searchResults = Userlist.filter(user => {
      let search = this.state.searchValue || '';
      const searchLower = search.toLowerCase();
      return (
        user.name.toLowerCase().indexOf(searchLower) >= 0 ||
        user.email.toLowerCase().indexOf(searchLower) >= 0 ||
        user.phone.toLowerCase().indexOf(searchLower) >= 0 ||
        user.role.toLowerCase().indexOf(searchLower) >= 0
      );
    });

    return (
      <React.Fragment>
        <div className="add-new-user">
          <AddNewUser />
        </div>
        <div className="search-input">
          <img src={searchIcon} alt="Find" />
          <input
            value={this.state.searchValue}
            type="search"
            className="find"
            placeholder="Search by username, email, role..."
            onChange={this.search.bind(this)}
          />
        </div>

        <div className="list-of-users">
          <Users users={searchResults} />
        </div>
      </React.Fragment>
    );
  }
}

export default ManageUsers;
