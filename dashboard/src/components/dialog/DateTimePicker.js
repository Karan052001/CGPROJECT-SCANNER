import React, { Component } from 'react';

import 'moment';
import 'react-datetime/css/react-datetime.css';
import Picker from 'react-datetime';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dateTime: '',
    };
  }

  render() {
    const handleOpen = () => this.setState({open: true});
    const handleClose = () => this.setState({open: false});
    const submit = () => {
      this.props.value(this.state.dateTime);
      handleClose();
    };

    return (
      <div>
        <Button aria-label="dateRange" onClick={handleOpen}><AccessTimeIcon/></Button>
        <Dialog
          open={this.state.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="time-picker">Select date and time</DialogTitle>
          <DialogContent>
            <Picker
              onChange={(event, value) => this.setState({dateTime: event.format('YYYY-MM-DD HH:mm:ss')})}
              dateFormat="YYYY-MM-DD"
              timeFormat="HH:mm:ss"
              input={false}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={submit} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DateTimePicker;
