import React from "react";

const Timesheet = ({ timesheet }) => {
  const { title, project, time } = timesheet;
  return (
    <li className='collection-item '>
      <div className='row center-align'>
        <div className='grid-example col s3 center-align'>{title}</div>
        <div className='grid-example col s3 center-align'>{project}</div>
        <div className='grid-example col s2 center-align'>{time}</div>
        <div className='grid-example col s2 center-align'>
          <a className='waves-effect waves-light teal btn-small'>
            <i className='fas fa-edit'></i>
          </a>
        </div>
        <div className='grid-example col s2 center-align'>
          <a className='waves-effect waves-light red btn-small'>
            <i className='fas fa-trash-alt'></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Timesheet;
