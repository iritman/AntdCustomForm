import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";
import ProductRequestModal from "./ProductRequestModal";
// import faIR from "antd/locale/fa_IR";

const ProductRequestForm = () => {
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  console.log(formValues);

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
