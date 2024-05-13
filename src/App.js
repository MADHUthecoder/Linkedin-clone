import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="app">
      <Header />

      {user ? (<Login />) : (
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;
