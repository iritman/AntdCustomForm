import React, { useState } from "react";
import { Modal } from "antd";
import { ControlType, AntdControl } from "./AntdControl";

const AntdModal = (props) => {
  const { open, title, initialValues, onSubmit, onCancel, ...rest } = props;

  const [formInstance, setFormInstance] = useState();

  const handleSubmit = async () => {
    try {
      const values = await formInstance?.validateFields();
      formInstance?.resetFields();
      onSubmit(values);
    } catch (error) {
      //   console.log("Failed:", error);
    }
  };

  return (
    <Modal
      open={open}
      title={title || "ثبت اطلاعات"}
      okText="ثبت"
      cancelText="انصراف"
      //   okButtonProps={{
      //     autoFocus: true,
      //   }}
      onCancel={onCancel}
      destroyOnClose
      onOk={handleSubmit}
      {...rest}
    >
      <section>
        <article
          id="modal-content"
          className="scrollbar-normal"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <AntdControl
            control={ControlType.Form}
            initialValues={initialValues}
            onFormInstanceReady={(instance) => {
              setFormInstance(instance);
            }}
          >
            {props.children}
          </AntdControl>
        </article>
      </section>
    </Modal>
  );
};

export default AntdModal;
