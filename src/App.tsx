import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, RouteComponentProps, withRouter } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Home from './components/site/Home/Home';

const App: React.FC<RouteComponentProps> = () => {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token') || 'undefined');
    };
  }, []);

  const updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  };

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') && sessionToken !== 'undefined' ?
      <Fragment>
        <Router>
          <Home clickLogout={clearToken} token={sessionToken} />
        </Router>
      </Fragment>
      : <Auth updateToken={updateToken} />);
  };

  return (
    <Fragment>
      {protectedViews()}
    </Fragment>
  );
};

export default withRouter(App);
