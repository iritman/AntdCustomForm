import { useState } from "react";
import { useMount } from "react-use";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import jalaliPlugin from "@zoomit/dayjs-jalali-plugin";
import "dayjs/locale/fa";

const DateInput = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  useMount(() => {
    if (value) {
      setSelectedDate(dayjs(value, { jalali: true }));
    }
  });

  dayjs.extend(jalaliPlugin);
  dayjs.calendar("jalali");

  const datePickerLocale = {
    lang: {
      locale: "fa", // Set locale to Persian
      placeholder: "انتخاب تاریخ", // Custom placeholder text
      rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"], // Custom range placeholder text
      today: "امروز", // Custom "today" text
      now: "اکنون", // Custom "now" text
      backToToday: "بازگشت به امروز", // Custom "back to today" text
      ok: "تایید", // Custom "OK" text
      clear: "پاک کردن", // Custom "Clear" text
      month: "ماه", // Custom "month" text
      year: "سال", // Custom "year" text
      timeSelect: "انتخاب زمان", // Custom "time select" text
      dateSelect: "انتخاب تاریخ", // Custom "date select" text
      monthSelect: "انتخاب ماه", // Custom "month select" text
      yearSelect: "انتخاب سال", // Custom "year select" text
      decadeSelect: "انتخاب دهه", // Custom "decade select" text
      // Other customizations as needed...
      fieldDateFormat: "YYYY-MM-DD",
      shortMonths: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
      ],
    },
  };

  const onDateChange = (date, dateString) => {
    onChange?.(dateString);
    setSelectedDate(date);
  };

  return (
    <DatePicker
      locale={datePickerLocale}
      value={selectedDate || dayjs(value, { jalali: true })}
      onChange={onDateChange}
    />
  );
};

const AntdDate = (props) => {
  const { title, fieldName, rules, ...rest } = props;

  return (
    <Form.Item name={fieldName} label={title} rules={rules}>
      <DateInput {...rest} />
    </Form.Item>
  );
};

export default AntdDate;
