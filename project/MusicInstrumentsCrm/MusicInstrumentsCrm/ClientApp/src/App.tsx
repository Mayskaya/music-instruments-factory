import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import MainPage from './components/MainPage';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/auth' component={Auth}/>
          <Route path='/index' component={MainPage}/>
        </div>
      </BrowserRouter>
    );
  }
}
