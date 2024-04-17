import React, { useState } from "react";
import { Button } from "antd";
import ProductRequestModal from "./ProductRequestModal";

const ProductRequestForm = () => {
  const [formValues, setFormValues] = useState({
    title: "---",
    city: 2,
    regDate: "14030724",
    regTime: "1735",
  });
  const [open, setOpen] = useState(false);

  const onSubmit = (values) => {
    console.log("Received values of form: ", values);

    setFormValues(values);
    setOpen(false);
  };

  return (
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
        onSubmit={onSubmit}
        onCancel={() => setOpen(false)}
        initialValues={
          formValues || {
            modifier: "public",
          }
        }
      />
    </>
  );
};

export default ProductRequestForm;
