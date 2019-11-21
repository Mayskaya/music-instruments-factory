import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth';
import MainPage from './components/MainPage';


export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/auth' component={Auth}></Route>
          <Route path='/index' component={MainPage}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
