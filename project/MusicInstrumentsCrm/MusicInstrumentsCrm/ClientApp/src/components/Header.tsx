import React from 'react';
import { Link } from 'react-router-dom';

var user: string;

export default class Header extends React.Component<{}, {}> {
  user = "admin";
  public render() {
    return (
      <div className="Header">
        <header className="header-app">
          <li className="header-name">MiCRM</li>
          <li className="user-name">
            <Link to='/Auth'>{this.user}</Link>
          </li>
        </header>
      </div>);
  }
}
