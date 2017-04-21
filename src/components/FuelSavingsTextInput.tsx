import * as React from 'react';

interface OwnProps {
  name: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  value: string | number;
}

const FuelSavingsTextInput = (props: OwnProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input
      className="small"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default FuelSavingsTextInput;
