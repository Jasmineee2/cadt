import React, { Component } from 'react';
import Users from './Users';
import AddNewUser from './AddNewUser';
import searchIcon from '../assets/search-icon.png';
import Userlist from '../data/users.json';
import './ManageUsers.scss';
import { isUserWhitespacable } from 'babel-types';

class ManageUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: Userlist,
      name: '',
      email: '',
      phone: '',
      role: 'User',
      searchValue: '',
      addNewUserOpen: false,
      opened: false,
      idOfUser: '',
      index: ''
    };
    this.handleAddUserClick = this.handleAddUserClick.bind(this);
    this.addUserSubmit = this.addUserSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.openUpdateInput = this.openUpdateInput.bind(this);
    this.closeUpdateInput = this.closeUpdateInput.bind(this);
  }

  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }

  handleAddUserClick() {
    this.setState(prevState => ({
      addNewUserOpen: !prevState.addNewUserOpen
    }));
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addUserSubmit() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.role
    };
    const users = [...this.state.users, newUser];

    this.setState({ users });
    this.handleAddUserClick();
  }

  openUpdateInput(id, index) {
    const opened = id === this.state.idOfUser;
    if (!opened) {
      this.setState({ idOfUser: id, index, opened: true });
    }
  }

  closeUpdateInput() {
    this.setState({ opened: false, idOfUser: '' });
  }

  updateUser() {
    const users = [...this.state.users];
    const updatedUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    const index = this.state.index;
    users[index] = updatedUser;
    this.setState({ users });
    this.closeUpdateInput();
  }

  render() {
    const searchResults = this.state.users.filter(user => {
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
          <AddNewUser
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            addNewUserOpen={this.state.addNewUserOpen}
            handleAddUserClick={this.handleAddUserClick}
            handleChange={this.handleChange}
            addUserSubmit={this.addUserSubmit}
          />
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
          <Users
            users={searchResults}
            opened={this.state.opened}
            updateUser={this.updateUser}
            handleChange={this.handleChange}
            openUpdateInput={this.openUpdateInput}
            closeUpdateInput={this.closeUpdateInput}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ManageUsers;
