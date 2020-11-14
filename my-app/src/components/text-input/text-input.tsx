import React, { FC, useState } from 'react';
import { AutoComplete, Button } from 'antd';

const mockVal = (str: string, repeat: number = 1) => {
  return {
    value: str.repeat(repeat),
  };
};
const Complete: FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <>
    
    <br />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <Button type="primary" >Push</Button>
    </>
  );
};

export default Complete;