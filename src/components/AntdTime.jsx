import { useState } from "react";
import { useMount } from "react-use";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";

const format = "HH:mm";

const TimeInput = ({ value, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  useMount(() => {
    if (value) {
      setSelectedTime(
        dayjs(`${value.substring(0, 2)}:${value.substring(2)}`, format)
      );
    }
  });

  const onTimeChange = (time, timeString) => {
    onChange?.(timeString.replace(":", ""));
    setSelectedTime(time);
  };

  return (
    <TimePicker
      format={format}
      value={selectedTime || (value && dayjs(value, format))}
      onChange={onTimeChange}
    />
  );
};

const AntdTime = (props) => {
  const { title, fieldName, rules, ...rest } = props;

  return (
    <Form.Item name={fieldName} label={title} rules={rules}>
      <TimeInput {...rest} />
    </Form.Item>
  );
};

export default AntdTime;
