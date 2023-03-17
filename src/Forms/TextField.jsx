import { useId} from "react";
import style from "../TaskForm.module.css";

function TextField({placeholder, labelTitle, value, onChange, error, name}) {

  const id = useId();
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className={style['input-group']}>
      <label htmlFor={id}>{labelTitle}</label>
      <input 
        type='text' 
        id={id} 
        placeholder={ placeholder } 
        className={style.input} 
        value={value} 
        onChange={ handleChange }
      />
      {error && error.field === name && <p style={{color: 'red'}}>{error.message}</p>}
    </div>

  );
}

export default TextField;