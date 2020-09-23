import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Home from './components/site/Home';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') && sessionToken !== 'undefined' ?
      <div>
        <Router>
          <Home clickLogout={clearToken} token={sessionToken} />
        </Router>
      </div>
      : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      {protectedViews()}
    </div>
  );
}

export default App;
