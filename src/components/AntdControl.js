import React from "react";
import AntdInput from "./AntdInput";
import AntdTextArea from "./AntdTextArea";
import AntdSwitch from "./AntdSwitch";
import AntdRadio from "./AntdRadio";
import AntdSelect from "./AntdSelect";
import AntdCheckbox from "./AntdCheckbox";
import AntdDate from "./AntdDate";

export const ControlType = {
  Input: "input",
  TextArea: "textarea",
  Dropdown: "select",
  Radio: "radio",
  Checkbox: "checkbox",
  Switch: "switch",
  Date: "date",
};

export const AntdControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case ControlType.Input:
      return <AntdInput {...rest} />;
    case ControlType.TextArea:
      return <AntdTextArea {...rest} />;
    case ControlType.Dropdown:
      return <AntdSelect {...rest} />;
    case ControlType.Radio:
      return <AntdRadio {...rest} />;
    case ControlType.Checkbox:
      return <AntdCheckbox {...rest} />;
    case ControlType.Switch:
      return <AntdSwitch {...rest} />;
    case ControlType.Date:
      return <AntdDate {...rest} />;
    default:
      return null;
  }
};

// export default { ControlType, AntdControl };
