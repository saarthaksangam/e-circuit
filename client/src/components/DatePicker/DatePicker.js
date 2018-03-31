import React, { Fragment, PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';
import {Icon,IconButton} from 'material-ui';

import './DatePicker.css';

export default class BasicUsage extends PureComponent {
  state = {
    selectedDate: null,
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>

        <div className="picker" className="picker-custom">
          <DatePicker
          keyboard
            label="Date of Birth"
            format="DD/MM/YYYY"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            value={selectedDate}
            placeholder="DD/MM/YYYY"
            onChange={this.handleDateChange}
            animateYearScrolling={false}
            autoOk = "true"
            keyboardIcon = "date_range"
          />
        </div>
      </Fragment>
    );
  }
}
