import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (<div className="App">
      <Header/>
      <Navbar/> 
      <Footer/>
    </div>);

  }
}
