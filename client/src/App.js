import React, { Component,Fragment } from 'react';
import './App.css';
import StudentRegister from './containers/StudentRegister/StudentRegister';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: { main: yellow[500] }, // Purple and green play nicely together.
    //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class App extends Component {

  render() {
    return (
      <Fragment>
      <MuiThemeProvider theme={theme}>

      <StudentRegister />
      </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
