import React, { Component } from 'react';
import setting from './assets/setting.png';
import './Users.scss';

class Users extends Component {
  constructor() {
    super();
    this.loadMore = this.loadMore.bind(this);
    this.state = { items: 4 };
  }

  loadMore() {
    this.setState({ items: this.state.items + 4 });
  }
  render() {
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
                    <img className="setting-icon" src={setting} alt="setting" />
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
      </React.Fragment>
    );
  }
}

export default Users;
