import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Header />

      {user ? (<Login />) : (
      <div className="App_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

      {/* Widgets */}
    </div>
  );
}

export default App;
