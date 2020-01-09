import React, {useState} from 'react';

const useInput = (init = '') => {
    const [value, setValue] = useState(init);
    const onChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    // return the value with the onChange function instead of setValue function
    return [value, onChange, reset];
};


export default useInput;
