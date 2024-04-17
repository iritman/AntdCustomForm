import { Col } from "antd";
import { ControlType, AntdControl } from "../../components/AntdControl";
import AntdModal from "../../components/AntdModal";

const ProductRequestModal = ({ open, onSubmit, onCancel, initialValues }) => {
  return (
    <AntdModal
      open={open}
      title="ثبت اطلاعات"
      initialValues={initialValues}
      width={1250}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <Col xs={24}>
        <AntdControl
          control={ControlType.Input}
          fieldName="title"
          title="عنوان"
          rules={[{ required: true }]}
          maxLength={5}
          autoFocus={true}
        />
      </Col>

      <Col xs={24}>
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
      </Col>

      <Col xs={24}>
        <AntdControl
          control={ControlType.TextArea}
          fieldName="description"
          title="توضیحات"
          maxLength={15}
          rows={4}
          showCount
        />
      </Col>

      <Col xs={12} md={6}>
        <AntdControl
          control={ControlType.Radio}
          fieldName="modifier"
          title="وضعیت"
          dataSource={[
            { title: "Public", value: "public" },
            { title: "Private", value: "private" },
          ]}
        />
      </Col>

      <Col xs={12} md={6}>
        <AntdControl
          control={ControlType.Switch}
          fieldName="isValid"
          checkedChildren="فعال"
          unCheckedChildren="غیر فعال"
        />
      </Col>

      <Col xs={12} md={6}>
        <AntdControl
          control={ControlType.Checkbox}
          fieldName="port"
          itemTitle="فعال"
        />
      </Col>

      <Col xs={12} md={6}>
        <AntdControl
          control={ControlType.Date}
          fieldName="regDate"
          itemTitle="تاریخ ثبت"
        />
      </Col>

      <Col xs={12} md={6}>
        <AntdControl
          control={ControlType.Time}
          fieldName="regTime"
          itemTitle="زمان ثبت"
        />
      </Col>
    </AntdModal>
  );
};

export default ProductRequestModal;
