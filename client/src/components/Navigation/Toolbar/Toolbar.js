import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css'


const toolbar = () => (
  // <AppBar
    //   title = ""
       // iconClassNameRight = ""
   ///>
  <header className = {classes.Toolbar} >
  <div className = {classes.Logo}>
    <Logo />
  </div>

  

  </header>
);

export default toolbar;
