import React from "react";

interface InputProps extends React.ClassAttributes<HTMLInputElement> {
  type?: string;
}

const InputComponent = (props: InputProps) => {
  const { type, ...restProps } = props;
  return <input type={type || "text"} {...restProps} />;
};

export default InputComponent;
