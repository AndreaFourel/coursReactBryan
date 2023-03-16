import { forwardRef, useState } from "react";
import { useId, useImperativeHandle, useRef } from "react";
import style from "../TaskForm.module.css";

function TextField({placeholder, labelTitle}, ref) {

  const [value, setValue] = useState('');

  const id = useId();
  const input = useRef(null);

  useImperativeHandle(ref, () => ({
    focus : () => {
      input.current.focus();
    },
    setDefaultValue: (defaultValue = '') => {
      //input.current.value = defaultValue;
      setValue(defaultValue);
    },
    resetValue: () => {
      //input.current.value = null;
      setValue(null);
    },
    value,
  }), [value]);


  return (
    <div className={style['input-group']}>
      <label htmlFor={id}>{labelTitle}</label>
      <input 
        ref={ input } 
        type='text' 
        id={id} 
        placeholder={ placeholder } 
        className={style.input} 
        value={value} 
        onChange={ (e)=> setValue(e.target.value) }
      />
    </div>

  );
}

export default forwardRef(TextField);