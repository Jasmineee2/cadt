import React, { Component } from 'react';
import setting from '../assets/setting.png';
import xIcon from '../assets/x-icon.png';
import './Users.scss';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      items: 4
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({ items: this.state.items + 4 });
  }

  render() {
    const {
      name,
      email,
      phone,
      updateUser,
      opened,
      handleChange,
      openUpdateInput,
      closeUpdateInput
    } = this.props;
    const updateUserInput = opened ? (
      <div className="overlay-update">
        <div className="update-user">
          <div className="title">
            <h3>Update User</h3>
            <img onClick={closeUpdateInput} src={xIcon} alt="cancel" />
          </div>
          <ul className="update-user-input">
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
            <button onClick={closeUpdateInput} className="cancel">
              Cancel
            </button>
            <button onClick={() => updateUser()} className="update">
              Update
            </button>
          </div>
        </div>
      </div>
    ) : null;
    return (
      <React.Fragment>
        <ul className="user-list">
          {this.props.users.slice(0, this.state.items).map((user, index) => {
            return (
              <li className="each-user">
                <div>
                  <div className="x-icon">
                    <img className="x-icon" src={user.picture} alt="x" />
                  </div>
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                  </div>

                  <div className="setting">
                    <img
                      onClick={() => openUpdateInput(user._id, index)}
                      className="setting-icon"
                      src={setting}
                      alt="setting"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {this.state.items < this.props.users.length ? (
          <button onClick={this.loadMore} className="load-more">
            Load more
          </button>
        ) : null}
        {updateUserInput}
      </React.Fragment>
    );
  }
}

export default Users;
