import React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (<div className="App">
      <Header/>
      <Navbar/> 
      <Footer/>
	</div>);

  }
}
