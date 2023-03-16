import { useState } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";


function TaskForm({ isTimerStarted, onSubmit }) {

  const initialFormValue = {
    title : '',
    description: '',
  }

  const [formValue, setFormValue] = useState(initialFormValue)

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(formValue);
    if(isTimerStarted) {
      setFormValue(initialFormValue);
    }
  }

  return (
    <form onSubmit={ handleSubmitForm } >
      <TextField 
        placeholder='Titre de votre têche' 
        labelTitle='Titre' 
        value={ formValue.title }
        onChange={(v) => setFormValue({...formValue, title:v}) }
      />
      <TextareaField 
        placeholder='Ecrivez votre description ici...' 
        labelTitle='Description' 
        value={ formValue.description }
        onChange={(v) => setFormValue({...formValue, description:v}) }
      />
      <Button type='submit' isTimerStarted={ isTimerStarted } />
    </form>
  );
}

export default TaskForm;

