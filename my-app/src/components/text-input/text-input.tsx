import React, { FC, useState } from 'react';
import { Input, Button } from 'antd';

interface TodoFromProps {
  onAdd(title: string):void
}


const Complete: FC<TodoFromProps> = (props) => {
  const [title, setTitle] = useState('');
  const changeHandler = (value: any) => {
    console.log('value', value);
    setTitle(value); 
  };

  const pushTask = () => {
    console.log(title);
    props.onAdd(title);
    setTitle('');
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    
    if(event.key === 'Enter') {
      pushTask();
    }

  };

  return (
    <>
    
    <br />
      <Input
        onChange={(e) => changeHandler(e.target.value)}
        onKeyPress={keyPressHandler}
        placeholder="input here"
        value={title || ' '}
      />
      <br />
      <br />
      <Button type="primary" onClick={pushTask}>Push</Button>
    </>
  );
};

export default Complete;