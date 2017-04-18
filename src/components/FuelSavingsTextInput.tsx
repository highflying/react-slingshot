import * as React from 'react';

interface IOwnProps {
  name: string;
  onChange: (name: string, value: any) => any;
  placeholder?: string;
  value: string | number;
}

const FuelSavingsTextInput = (props: IOwnProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
