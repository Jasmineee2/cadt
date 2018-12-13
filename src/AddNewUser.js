import React, { Component } from 'react';
import xIcon from './assets/x-icon.png';

import './AddNewUser.scss';

class AddNewUser extends Component {
  constructor() {
    super();
    this.state = {
      addNewUserOpen: false
    };
    this.handleAddUserClick = this.handleAddUserClick.bind(this);
  }
  handleAddUserClick() {
    if (!this.state.addNewUserOpen) {
      // attach/remove event handler
      document.addEventListener('click', this.handleProfileOutsideClick, false);
    } else {
      document.removeEventListener(
        'click',
        this.handleAddUserOutsideClick,
        false
      );
    }
    this.setState(prevState => ({
      addNewUserOpen: !prevState.addNewUserOpen
    }));
  }

  handleAddUserOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleAddUserClick();
  }
  render() {
    const { addNewUserOpen } = this.state;
    const addNewUserInput = addNewUserOpen ? (
      <div className="overlay">
        <div className="new-user">
          <div className="title">
            <h3>Add New User</h3>
            <img onClick={this.handleAddUserClick} src={xIcon} alt="cancel" />
          </div>
          <ul className="new-user-input">
            <li>
              <p>Name</p>
              <input placeholder="name" />
            </li>
            <li>
              <p>Email</p>
              <input placeholder="email" />
            </li>
            <li>
              <p>Phone</p>
              <input placeholder="phone" />
            </li>
          </ul>
          <div className="buttons">
            <button onClick={this.handleAddUserClick} className="cancel">
              Cancel
            </button>
            <button className="create">Create</button>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <React.Fragment>
        <button
          className="add-new-user-open"
          ref={node => {
            this.node = node;
          }}
          onClick={this.handleAddUserClick}
        >
          Add New User
        </button>
        {addNewUserInput}
      </React.Fragment>
    );
  }
}

export default AddNewUser;
