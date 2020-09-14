import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import contactReducer from "./timesheetReducer";
import TimesheetContext from "./timesheetContext";
import {
  ADD_TIMESHEET,
  DELETE_TIMESHEET,
  UPDATE_TIMESHEET,
  CLEAR_CURRENT,
  FILTER_TIMESHEET,
  CLEAR_FILTER,
} from "../types";

const TimesheetState = (props) => {
  const initialState = {
    timesheets: [
      { id: 1, title: "Project1 Monday", project: "Project1", time: 20 },
      { id: 2, title: "Project2 Tuesday", project: "Project2", time: 45 },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add a new timesheet

  //Delete a timesheet

  //Set current timesheet

  //Clear current timesheet

  //Update timesheet

  //Filter timesheet

  //Clear filter

  return (
    <TimesheetContext.Provider
      value={{
        timesheets: state.timesheets,
      }}
    >
      {props.children}
    </TimesheetContext.Provider>
  );
};

export default TimesheetState;
