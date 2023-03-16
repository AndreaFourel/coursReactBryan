import { useEffect, useId, useRef } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";


function TaskForm({ isTimerStarted, onSubmit }) {

  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  useEffect(() => {
    titleInput.current.focus();
    titleInput.current.setDefaultValue('hey!')
  }, [])

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(titleInput.current.value);
    // onSubmit({
    //   title: titleInput.current.value,
    //   description : descriptionInput.current.value,
    // });
    // if(isTimerStarted) {
    //   titleInput.current.value = null;
    //   descriptionInput.current.value = null;
    // }
  }

  return (
    <form onSubmit={ handleSubmitForm } >
      <TextField placeholder='Titre de votre têche' labelTitle='Titre' ref={ titleInput }/>
      <TextareaField placeholder='Ecrivez votre description ici...' labelTitle='Description' />
      <Button type='submit' isTimerStarted={ isTimerStarted } />
    </form>
  );
}

export default TaskForm;

