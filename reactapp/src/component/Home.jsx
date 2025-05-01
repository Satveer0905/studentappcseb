import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div><h2 className="home-header">Welcome to Student Page</h2></div>
      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/studentadmin"></Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
export default Home;
