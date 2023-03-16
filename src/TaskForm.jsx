import { useState } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";


function TaskForm({ isTimerStarted, onSubmit }) {

  const initialFormValue = {
    title : '',
    description: '',
  };

  const [formValue, setFormValue] = useState(initialFormValue);
  const [error, setError] = useState(null);


  const handleSubmitForm = (event) => {
    event.preventDefault();
    if(error) {
      alert(`${error.field}: ${error.message}`);
      return;
    }
    onSubmit(formValue);
    if(isTimerStarted) {
      setFormValue(initialFormValue);
    }
  }

  const handleInputChange = (field, value) => {
    if(field === 'title' && (!value || value.length < 4)){
      setError({
        field,
        message: 'Title must have at least 4 sharacters',
      });
    } else {
      setError(null);
    }
    setFormValue({...formValue, [field]: value})
  }

  return (
    <form onSubmit={ handleSubmitForm } >
      <TextField 
        placeholder='Titre de votre tâche' 
        labelTitle='Titre' 
        value={ formValue.title }
        onChange={(v) => handleInputChange('title', v) }
      />
      {error && error.field === 'title' && <p style={{color: 'red'}}>{error.message}</p>}
      <TextareaField 
        placeholder='Ecrivez votre description ici...' 
        labelTitle='Description' 
        value={ formValue.description }
        onChange={(v) => handleInputChange('description', v) }
      />
      <Button type='submit' isTimerStarted={ isTimerStarted } />
    </form>
  );
}

export default TaskForm;

