import React, { FC, useRef } from 'react';
import { Input } from 'antd';


const TextInputBottom: FC = () => {
    //const ref = useRef<HTMLInputElement>(null);
    //const keyPressHandler = (event: React.KeyboardEvent) => {
    //if(event.key === 'Enter') {
    //console.log(ref.current!.value);
      //  ref.current!.value = ''
    //}
    //};

return (
    <>
    
    <br />
    <Input
        //ref={ref}
        type="text"
        //onKeyPress={(event) => keyPressHandler(event)}
        placeholder="input here"
        
    />
    <br />
    </>
);
};

export default TextInputBottom;