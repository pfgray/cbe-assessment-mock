
import React from 'react';

const Header = ({ user }) => (
  <div className="header">
    <div className="logo">CBE Assesser wat</div>
    {user ?
      <div className="user">{user.first}</div>
      : null}
  </div>
);

export default Header;
