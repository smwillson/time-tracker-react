import "react-dates/initialize";
import React, { useState } from "react";
import moment from "moment";

import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const date = moment();
console.log(date.format("MMM Do, YYYY"));

const TimesheetForm = () => {
  const [timesheet, setTimesheet] = useState({
    title: "",
    project: "",
    time: "",
  });

  const { title, project, time } = timesheet;

  const [calendarFocused, setCalendarFocus] = useState(false);
  console.log(typeof calendarFocused);
  const [createdAt, setCreatedAt] = useState(moment());

  const onChange = (event) =>
    setTimesheet({
      ...timesheet,
      [event.target.name]: event.target.value,
    });

  const onDateChange = (createdAt) => setCreatedAt(createdAt);

  const onCalendarFocusChange = ({ focused }) => setCalendarFocus({ focused });
  return (
    <form>
      <h5 className='text-primary'>Add time</h5>
      <input
        type='text'
        placeholder='Enter title'
        title='title'
        value={title}
        onChange={onChange}
      />
      <select name='project'>
        <option value='project' disabled defaultValue>
          Choose your project
        </option>
        <option value='1'>Project 1</option>
        <option value='2'>Project 2</option>
        <option value='3'>Project 3</option>
      </select>
      <SingleDatePicker
        date={createdAt} // momentPropTypes.momentObj or null
        onDateChange={onDateChange} // PropTypes.func.isRequired
        focused={calendarFocused} // PropTypes.bool
        onFocusChange={onCalendarFocusChange} // PropTypes.func.isRequired
        id='#123' // PropTypes.string.isRequired,
      />
      <div>
        <input
          type='submit'
          value='Add new time'
          className='waves-effect waves-light btn-large'
        />
      </div>
    </form>
  );
};

export default TimesheetForm;
