import React from "react";

const Timesheet = ({ timesheet }) => {
  const { title, project, time } = timesheet;
  return (
    <li className='collection-item '>
      <div className='row center-align'>
        <div class='col s4 center-align'>{title}</div>
        <div class='col s3 center-align'>{project}</div>
        <div class='col s3 center-align'>{time}</div>
        <div class='col s1 center-align'>
          <a className='waves-effect waves-light teal btn-small'>
            <i class='fas fa-edit'></i>
          </a>
        </div>
        <div class='col s1 center-align'>
          <a className='waves-effect waves-light red btn-small'>
            <i class='fas fa-trash-alt'></i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Timesheet;
