import React, { Component } from 'react';
import logo from './logo.svg';
import ManageUsers from './ManageUsers';
import './App.scss';

const App = () => {
  return (
    <div>
      <header>
        <div className="title">Management App</div>
      </header>
      <main className="wrapper">
        <aside>
          <div>Manage Users</div>
        </aside>
        <section>
          <ManageUsers />
        </section>
      </main>
    </div>
  );
};

export default App;
