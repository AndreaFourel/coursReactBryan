import { useId } from "react";
import style from "../TaskForm.module.css";

function TextareaField({placeholder, labelTitle, value, onChange, name, error}) {

  const id = useId();

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return(
    <div className={style['input-group']}>
      <label htmlFor={ id }>{labelTitle}</label>
      <textarea 
        id={ id } rows="5" 
        placeholder={ placeholder } 
        className={style.input} 
        value={value} 
        onChange={ handleChange}
      ></textarea>
      {error && error.field === name && <p style={{color: 'red'}}>{error.message}</p>}
    </div>
  );
}

export default TextareaField;