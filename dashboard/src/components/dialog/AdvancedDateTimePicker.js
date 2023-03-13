import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const AdvancedDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date._d);
  };

  return (
    <Datetime
      value={selectedDate}
      onChange={handleChange}
      dateFormat="MMMM D, YYYY"
      timeFormat="hh:mm:ss A"
      utc={false}
      isValidDate={(currentDate) => currentDate.isBefore(new Date())}
      inputProps={{ placeholder: 'Select date and time' }}
      closeOnSelect={true}
      closeOnTab={true}
      disableOnClickOutside={true}
      input={true}
      renderInput={(props, openCalendar) => (
        <input {...props} onClick={openCalendar} />
      )}
    />
  );
};

export default AdvancedDateTimePicker;