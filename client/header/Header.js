
import React from 'react';

const Header = ({ user }) => (
  <div className="header">
    <div className="logo">CBE Assesser</div>
    {user ?
      <div className="user">{user.first}</div>
      : null}
  </div>
);

export default Header;
