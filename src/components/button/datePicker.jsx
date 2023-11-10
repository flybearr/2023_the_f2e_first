import { useState, Fragment, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import zhCN from "date-fns/locale/zh-CN";
import "../../styles/button/datePickers.scss";
registerLocale("zh-CN", zhCN);

export default function DatePickers() {
  const [dateRange, setDateRange] = useState([null, null]);
  const datePickerOpenRef = useRef(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
    if (datePickerOpenRef.current) {
      datePickerOpenRef.current.setOpen(!isDatePickerOpen);
    }
  };
  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <Fragment>
      <div className="custom-container">
        <DatePicker
          ref={datePickerOpenRef}
          locale={zhCN}
          dateFormatCalendar="LL月 / yyyy年"
          onChange={handleDateChange}
          monthsShown={2}
          selectsRange={true}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          placeholderText="請選擇時間日期"
        />
        <span
          className="material-symbols-outlined calendar-icon"
          onClick={toggleDatePicker}
        >
          calendar_today
        </span>
      </div>
    </Fragment>
  );
}
