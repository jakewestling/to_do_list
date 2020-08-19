import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
      <Link style={linkStyle} to="/">Home</Link> |
      <Link style={linkStyle} to="/about"> About</Link>
    </header>
  )
}

const headerStyle = {
  color: '#000',
  textAlign: 'center',
  paddingBottom: '10px'
}

const linkStyle = {
  color: '#000'
}
export default Header;
