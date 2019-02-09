import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/Navbar';
import LabelBottomNavigation from './components/footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
         
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
