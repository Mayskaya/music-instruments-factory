import React from 'react';
import '../App.css';
import { string } from 'prop-types';

var user:string;

export default class Header extends React.Component<{}, {}> {
    user="admin";
  public render() {
    return (<div className="Header">
        <header className="header-app">
                <li className="header-name">MiCRM</li>
                <li className="user-name">{this.user}</li>
        </header>
    </div>);
  }
}
