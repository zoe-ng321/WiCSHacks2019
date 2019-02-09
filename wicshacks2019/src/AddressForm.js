import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class AddressForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      salary: 0,
      state:""
    };
  }
  handleChange = (event) => {
    this.setState({
      salary: event.target.value,
    });
    this.props.sendData(event.target.value);
  };

  handleChange2 = (event) => {
    this.setState({
      state: event.target.value,
    });
    this.props.sendData2(event.target.value);
  };


render(){
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Taxes
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Salary"
            name="Salary"
            label="Annual Salary"
            fullWidth
            autoComplete="Salary"
            placeholder="85000"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="State"
            name="State"
            label="State"
            fullWidth
            autoComplete="State"
            placeholder="Texas"

            onChange={this.handleChange2}

          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}}

AddressForm.propTypes = {
  callbackFromParent: PropTypes.func.isRequired,
};

export default AddressForm;
