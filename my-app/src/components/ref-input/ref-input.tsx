import React, { FC, RefObject, useRef, useState } from 'react';
import { Input } from 'antd';

interface TodoFromProps {
    onAdd(title: string):void
}


const TextInputBottom: FC<TodoFromProps> = (props) => {
    const ref = useRef() as RefObject<Input>;
    const [title, setState] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`event change: ${event.target.value}, ref val: ${ref.current!.state.value}`);
        setState(ref.current!.state.value);
        console.log('title', title);
        
    };

    const pushTask = () => {
        console.log('add', title);
        if(title) {
        props.onAdd(title);
        setState(' ');
        console.log('remove title', title);
        }
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
        ref={ref}
        type="text"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        placeholder="input here"
        
    />
    <br />
    </>
);
};

export default TextInputBottom;