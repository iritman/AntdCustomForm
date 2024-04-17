import React, { useState } from "react";
import { Button } from "antd";
import ProductRequestModal from "./ProductRequestModal";

const ProductRequestForm = () => {
  const [formValues, setFormValues] = useState({
    title: "---",
    city: 2,
    regDate: "1403-07-24",
    regTime: "1735",
  });
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
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
        onCreate={onCreate}
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
