import { Form, Select } from "antd";

const { Option } = Select;

const AntdSelect = (props) => {
  const { title, fieldName, rules, dataSource, ...rest } = props;

  return (
    <Form.Item name={fieldName} label={title} rules={rules}>
      <Select placeholder="<--- انتخاب --->" {...rest}>
        {dataSource.map(({ title, value }) => (
          <Option key={value} value={value}>
            {title}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default AntdSelect;
