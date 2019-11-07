import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';

export default class App extends React.Component<{}, {}> {
  private displayName: string = App.name;

  public render() {
    return <Switch>
      <Route path='/user' />
      {/* <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' />
      <Route path='/' /> */}
    </Switch>;
  }
}
