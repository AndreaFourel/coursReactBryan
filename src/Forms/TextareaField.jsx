import { useId, useRef } from "react";
import style from "../TaskForm.module.css";

function TextareaField({placeholder, labelTitle}) {

  const id = useId();
  const input = useRef(null);

  return(
    <div className={style['input-group']}>
      <label htmlFor={ id }>{labelTitle}</label>
      <textarea ref={ input } id={ id } rows="5" placeholder={ placeholder } className={style.input}></textarea>
    </div>
  );
}

export default TextareaField;