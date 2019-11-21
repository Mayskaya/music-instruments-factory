import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';


export default class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
        <div className="MainPage">
          <Header />
          <Navbar />
          <Content />
          <Footer />
        </div>
    );
  }
}
