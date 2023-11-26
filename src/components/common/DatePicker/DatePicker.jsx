import DatePicker from "react-datepicker";
import { MdOutlineCalendarToday } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css";
// import { calendar } from "../../../images";
import classes from "./Date.module.css";

const StartDate = ({ placeholder, value, ...rest }) => {
  return (
    <div className={classes.datePickerRoot}>
      <DatePicker selected={value} placeholderText={placeholder} {...rest} />
      <MdOutlineCalendarToday className={classes.calender} />
    </div>
  );
};

export default StartDate;
