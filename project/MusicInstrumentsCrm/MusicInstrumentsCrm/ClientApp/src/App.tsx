import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Message from './Message';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (<div className="App">
      <Header/>
      <Navbar/> 
      <Footer/>
	</div>);

  }
}
