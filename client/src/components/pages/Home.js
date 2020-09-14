import React from "react";
import TimesheetList from "../timesheets/TimesheetList";
import TimesheeList from "../timesheets/TimesheetList";

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div col s6>
          {/*TODO: Timesheet Form */}
        </div>
        <div col s6>
          <TimesheetList />
        </div>
      </div>
    </div>
  );
};

export default Home;
