import React from 'react';
import SrmLogo from '../../assets/images/logo.png';
import classes from './Logo.css';
const logo = (props) => (

  <div className={classes.Logo} style={{height:props.height}}>
    <img src={SrmLogo} alt="SRM LOGO" />
  </div>

);

export default logo;
