import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import Body from './components/body/body'
import Footer from "./components/footer/footer";
import themeData from './theme/theme';
import {MuiThemeProvider} from "@material-ui/core";

function App() {
  return (
      <React.Fragment>
        <MuiThemeProvider theme={themeData}>
            <Navbar/>
            <Body/>
            <Footer/>
         </MuiThemeProvider>
      </React.Fragment>
  );
}

export default App;
