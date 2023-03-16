import { useId, useRef } from "react";
import Button from "./Button";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

  const id = useId();

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmit({
      title: titleInput.current.value,
      description : descriptionInput.current.value,
    });
    if(isTimerStarted) {
      titleInput.current.value = null;
      descriptionInput.current.value = null;
    }
  }

  return (
    <form onSubmit={ handleSubmitForm } >
      <div className={style['input-group']}>
        <label htmlFor={`${id}-title`}>Titre</label>
        <input ref={ titleInput } type='text' id={`${id}-title`} placeholder='Titre de votre tâche' className={style.input} />
      </div>
      <div className={style['input-group']}>
        <label htmlFor={`${id}-description`}>Description</label>
        <textarea ref={ descriptionInput } id={`${id}-description`} rows="5" placeholder="Ecrivez la description de votre tâche" className={style.input}></textarea>
      </div>
      <Button type='submit' isTimerStarted={ isTimerStarted } />
    </form>
  );
}

export default TaskForm;

