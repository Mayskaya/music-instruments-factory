import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
