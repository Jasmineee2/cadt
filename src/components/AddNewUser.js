import React, { Component } from 'react';
import xIcon from '../assets/x-icon.png';
import './AddNewUser.scss';

class AddNewUser extends Component {
  render() {
    const {
      name,
      email,
      phone,
      addNewUserOpen,
      handleAddUserClick,
      handleChange,
      addUserSubmit
    } = this.props;
    const addNewUserInput = addNewUserOpen ? (
      <div className="overlay">
        <div className="new-user">
          <div className="title">
            <h3>Add New User</h3>
            <img onClick={handleAddUserClick} src={xIcon} alt="cancel" />
          </div>
          <ul className="new-user-input">
            <li>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={handleChange}
              />
            </li>
            <li>
              <p>Email</p>
              <input
                type="text"
                name="email"
                value={email}
                placeholder="email"
                onChange={handleChange}
              />
            </li>
            <li>
              <p>Phone</p>
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="phone"
                onChange={handleChange}
              />
            </li>
          </ul>
          <div className="buttons">
            <button onClick={handleAddUserClick} className="cancel">
              Cancel
            </button>
            <button className="create" onClick={addUserSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <React.Fragment>
        <button
          className="add-new-user-open"
          onClick={this.props.handleAddUserClick}
        >
          Add New User
        </button>
        {addNewUserInput}
      </React.Fragment>
    );
  }
}

export default AddNewUser;
