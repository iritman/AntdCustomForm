import React from "react";
import { Form } from "antd";
import { useMount } from "react-use";
import faIR from "antd/locale/fa_IR";

const AntdForm = (props) => {
  const { initialValues, onFormInstanceReady, ...rest } = props;
  const [form] = Form.useForm();

  useMount(() => {
    onFormInstanceReady(form);
  });

  return (
    <Form
      validateMessages={faIR.Form.defaultValidateMessages}
      layout="horizontal"
      form={form}
      //   name="form_in_modal"
      initialValues={initialValues}
      {...rest}
    >
      {props.children}
    </Form>
  );
};

export default AntdForm;
