import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";
import ProductRequestModal from "./ProductRequestModal";
// import faIR from "antd/locale/fa_IR";
// import dayjs from "dayjs";
// import jalaliPlugin from "@zoomit/dayjs-jalali-plugin";
// import "dayjs/locale/fa";

// dayjs.extend(jalaliPlugin);
// dayjs.calendar("jalali");

const ProductRequestForm = () => {
  const [formValues, setFormValues] = useState({
    title: "---",
    city: 2,
    regDate: "1403-07-24",
    // dayjs("1403-07-24", { jalali: true }),
  });
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  return (
    // <ConfigProvider direction="rtl" locale={faIR}>
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>

      <Button type="primary" danger onClick={() => setFormValues()}>
        Clear
      </Button>

      <pre>{JSON.stringify(formValues, null, 2)}</pre>

      <ProductRequestModal
        open={open}
        onCreate={onCreate}
        onCancel={() => setOpen(false)}
        initialValues={
          formValues || {
            modifier: "public",
          }
        }
      />
    </>
    // </ConfigProvider>
  );
};

export default ProductRequestForm;
