import React, { Component } from 'react';
import logo from './logo.svg';
import ManageUsers from './components/ManageUsers';
import xIcon from './assets/x-icon.png';
import hanburgerIcon from './assets/hanburger-icon.png';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = { sidebarOpen: false, mainOpen: false };
    this.handleSidebarClick = this.handleSidebarClick.bind(this);
    this.handleMainClick = this.handleMainClick.bind(this);
  }

  handleSidebarClick() {
    if (this.state.sidebarOpen) {
      this.setState({ sidebarOpen: false, mainOpen: false });
    } else {
      this.setState({ sidebarOpen: true });
    }
  }
  handleMainClick() {
    this.setState(prevState => ({
      mainOpen: !prevState.mainOpen
    }));
  }

  render() {
    return (
      <div>
        <header>
          <div className="header">
            <img
              onClick={this.handleSidebarClick}
              className="menu"
              src={this.state.sidebarOpen ? xIcon : hanburgerIcon}
              alt="Menu"
            />
            <div className="title">
              <p>Management App</p>
            </div>
          </div>
        </header>
        <main className="wrapper">
          {!this.state.sidebarOpen ? null : (
            <aside>
              <div onClick={this.handleMainClick}>Manage Users</div>
            </aside>
          )}
          {!this.state.mainOpen ? null : (
            <section>
              <ManageUsers />
            </section>
          )}
        </main>
      </div>
    );
  }
}

export default App;
