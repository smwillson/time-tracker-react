import React, { Fragment, useContext } from "react";
import TimesheetContext from "../../context/timesheet/timesheetContext";
import Timesheet from "./Timesheet";

const TimesheetList = () => {
  const timesheetContext = useContext(TimesheetContext);

  const { timesheets } = timesheetContext;

  return (
    <ul className='collection'>
      {timesheets.map((timesheet) => (
        <Timesheet key={timesheet.id} timesheet={timesheet} />
      ))}
    </ul>
  );
};

export default TimesheetList;
