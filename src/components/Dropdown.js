import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown(props) {
  const { data, currentValue, placeholder, selectedValue } = props;
// console.log({data, currentValue, placeholder, selectedValue})
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentValue ?? null);
  const [items, setItems] = useState(data);

  return (
    <DropDownPicker
      placeholder={placeholder}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={val => {
        setValue(val);
        selectedValue && selectedValue(val()); 
      }}
      setItems={setItems}
    />
  );
}