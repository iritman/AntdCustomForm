import React, { useState } from "react";
import { Modal } from "antd";
import { ControlType, AntdControl } from "../../components/AntdControl";

const ProductRequestModal = ({ open, onSubmit, onCancel, initialValues }) => {
  const [formInstance, setFormInstance] = useState();

  const handleSubmit = async () => {
    try {
      const values = await formInstance?.validateFields();
      formInstance?.resetFields();
      onSubmit(values);
    } catch (error) {
      console.log("Failed:", error);
    }
  };

  return (
    <Modal
      open={open}
      title="ثبت اطلاعات"
      okText="ثبت"
      cancelText="انصراف"
      //   okButtonProps={{
      //     autoFocus: true,
      //   }}
      onCancel={onCancel}
      destroyOnClose
      onOk={handleSubmit}
    >
      <AntdControl
        control={ControlType.Form}
        initialValues={initialValues}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      >
        <AntdControl
          control={ControlType.Input}
          fieldName="title"
          title="عنوان"
          rules={[{ required: true }]}
          maxLength={5}
          autoFocus={true}
        />

        <AntdControl
          control={ControlType.Dropdown}
          fieldName="city"
          title="شهر"
          rules={[{ required: true }]}
          allowClear
          dataSource={[
            { title: "تهران", value: 1 },
            { title: "ساری", value: 2 },
            { title: "شیراز", value: 3 },
            { title: "مشهد", value: 4 },
            { title: "کاشان", value: 5 },
            { title: "اصفهان", value: 6 },
            { title: "بوشهر", value: 7 },
          ]}
        />

        <AntdControl
          control={ControlType.TextArea}
          fieldName="description"
          title="توضیحات"
          maxLength={15}
          rows={4}
          showCount
        />

        <AntdControl
          control={ControlType.Radio}
          fieldName="modifier"
          title="وضعیت"
          dataSource={[
            { title: "Public", value: "public" },
            { title: "Private", value: "private" },
          ]}
        />

        <AntdControl
          control={ControlType.Switch}
          fieldName="isValid"
          checkedChildren="فعال"
          unCheckedChildren="غیر فعال"
        />

        <AntdControl
          control={ControlType.Checkbox}
          fieldName="port"
          itemTitle="فعال"
        />

        <AntdControl
          control={ControlType.Date}
          fieldName="regDate"
          itemTitle="تاریخ ثبت"
        />

        <AntdControl
          control={ControlType.Time}
          fieldName="regTime"
          itemTitle="زمان ثبت"
        />
      </AntdControl>
    </Modal>
  );
};

export default ProductRequestModal;
