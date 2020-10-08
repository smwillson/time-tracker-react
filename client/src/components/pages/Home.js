import React from "react";
import TimesheetList from "../timesheets/TimesheetList";
import TimesheetForm from "../timesheets/TimesheetForm";

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s6'>
          <TimesheetForm />
        </div>
        <div className='col s6'>
          <TimesheetList />
        </div>
      </div>
    </div>
  );
};

export default Home;
