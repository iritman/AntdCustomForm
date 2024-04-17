import "./App.css";
import { ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import "dayjs/locale/fa";
import ProductRequestForm from "./forms/product-request/ProductRequestForm";

const App = () => {
  return (
    <ConfigProvider direction="rtl" locale={faIR}>
      <div className="App">
        <ProductRequestForm />
      </div>
    </ConfigProvider>
  );
};

export default App;
