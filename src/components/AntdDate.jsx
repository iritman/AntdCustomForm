import { Form, DatePicker } from "antd";

const AntdDate = (props) => {
  const { title, fieldName, rules, ...rest } = props;

  return (
    <Form.Item name={fieldName} label={title} rules={rules}>
      <DatePicker {...rest} />
    </Form.Item>
  );
};

export default AntdDate;
