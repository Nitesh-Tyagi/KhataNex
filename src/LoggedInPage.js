import React from 'react';
import './style.css';
function LoggedInPage({ user }) {
  return (
    <div id="login-form">
      <h1>Log In Successful</h1>
      <p>Name: {user.name}</p>
      <p>Phone Number: {user.phoneno}</p>
    </div>
  );
}

export default LoggedInPage;
