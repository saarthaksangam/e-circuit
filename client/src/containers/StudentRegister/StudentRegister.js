import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper,Grid,TextField,Select,Button,Icon,IconButton} from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import {Visibility,VisibilityOff} from 'material-ui-icons';
import { FormControl, FormHelperText } from 'material-ui/Form';
import classNames from 'classnames';
import './StudentRegister.css'
import MenuItem from 'material-ui/Menu/MenuItem';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import Date from '../../components/DatePicker/DatePicker';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import AppBar from '../../components/AppBar/AppBar';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});




const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #2196F3 30%, #03A9F4 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
});













class FullWidthGrid extends Component {

  state = {
     department: '',
     name: 'hai',
   };

   handleChange = name => event => {
     this.setState({ [name]: event.target.value });
   };

 render() {
   const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar />

          {/* Master Grid */}
          <Grid container spacing={24} className="formContainer" >
              <Grid item xs={12}  >
                  {/* Form Container  */}
                  <Grid container alignItems='center' justify='center'>
                      {/* Text Field container */}
                      <Grid item xs={12} sm={10} md={6} >

                          {/* Card Begins */}
                          <Card className="CardContainer">
                          <SignUpHeader />
                              <CardContent>
                                  <Grid container >
                                      <Grid item xs={12} >
                                          {/* Row for two fields */}
                                          {/* Reg no & Department */}
                                          <Grid container direction='row' spacing={24} align='center' justify='center' className="rowItem" >
                                              <Grid item xs={12} md={6}  >

                                                  <FormControl className={classNames(classes.margin, classes.textField)}   className="rowItem List" >
                                                      <InputLabel htmlFor="RegNo">Registration No.</InputLabel>
                                                      <Input

                                                          id="RegNo"
                                                          type="text"

                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>perm_contact_calendar</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                              <Grid item xs={12} md={6} >



                                                  <FormControl className={classes.formControl}  className="List rowItem">
                                                       <InputLabel htmlFor="DEPARTMENT-CHOICE" >Department</InputLabel>
                                                       <Select
                                                         native
                                                         value={this.state.department}

                                                         onChange={this.handleChange('department')}
                                                         inputProps={{
                                                           id: 'DEPARTMENT-CHOICE',

                                                         }}
                                                         endAdornment={
                                                             <InputAdornment position="end">
                                                                 <Icon>school</Icon>
                                                             </InputAdornment>}


                                                       >

                                                         <option value="" />
                                                         <option value={0}>Electronics and Communication</option>
                                                         <option value={1}>Electronics and Electrical</option>
                                                         <option value={2}>Electrical and Instrumentation</option>
                                                       </Select>
                                                     </FormControl>



                                              </Grid>
                                          </Grid>

                                          {/* First Name and Last Name */}
                                          <Grid container direction='row' spacing={24} align='center' justify='center' className="rowItem" >
                                              <Grid item xs={12} md={6}  >

                                                  <FormControl className={classNames(classes.margin, classes.textField)}  className="rowItem List">
                                                      <InputLabel htmlFor="FirstName">First Name</InputLabel>
                                                      <Input
                                                          id="FirstName"
                                                          type="text"

                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>account_circle</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                              <Grid item xs={12} md={6}>
                                                  <FormControl className={classNames(classes.margin, classes.textField)} className="rowItem List">
                                                      <InputLabel htmlFor="LastName">Last Name</InputLabel>
                                                      <Input
                                                          id="LastName"
                                                          type="text"
                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>account_circle</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                          </Grid>

                                          {/* Password & Conf Password */}
                                          <Grid container direction='row' spacing={24} align='center' justify='center' className="rowItem List">
                                              <Grid item xs={12} md={6}  >

                                                  <FormControl className={classNames(classes.margin, classes.textField)} className="List">
                                                      <InputLabel htmlFor="Password">Password</InputLabel>
                                                      <Input
                                                          id="Password"
                                                          type="password"

                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>vpn_key</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                              <Grid item xs={12} md={6}>
                                                  <FormControl className={classNames(classes.margin, classes.textField)}  className="rowItem List">
                                                      <InputLabel htmlFor="ConfPassword">Confirm Password</InputLabel>
                                                      <Input
                                                          id="ConfPassword"
                                                          type="password"
                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>vpn_key</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                          </Grid>

                                          {/* Email & DOB */}
                                          <Grid container direction='row' spacing={24} align='center' justify='center'  className="rowItem List">
                                              <Grid item xs={12} md={6}  >

                                                  <FormControl className={classNames(classes.margin, classes.textField)} className="List">
                                                      <InputLabel htmlFor="Email">Email</InputLabel>
                                                      <Input
                                                          id="Email"
                                                          type="email"

                                                          endAdornment={
                                                              <InputAdornment position="end">
                                                                  <Icon>mail</Icon>
                                                              </InputAdornment>
                                                          }
                                                      />
                                                  </FormControl>
                                              </Grid>
                                              <Grid item xs={12} md={6}>
                                                  <FormControl className={classNames(classes.margin, classes.textField)} className="List" >
                                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                  <Date />
                                                  </MuiPickersUtilsProvider>


                                                  </FormControl>
                                              </Grid>
                                          </Grid>



                                          <Grid container direction='row' spacing={24} align='center' justify='center' className="submitButton" >
                                          <MuiThemeProvider theme={theme}>

                                              <Button variant="raised" color="secondary" >

                                                  Submit
                                                  </Button>
                                                  </MuiThemeProvider>
                                          </Grid>
                                      </Grid>
                                  </Grid>
                              </CardContent>
                          </Card>
                      </Grid>
                  </Grid>
              </Grid>

          </Grid>
      </div>
    );

 }
}
 FullWidthGrid .propTypes = {
   classes: PropTypes.object.isRequired,
 };



export default withStyles(styles)(FullWidthGrid);
