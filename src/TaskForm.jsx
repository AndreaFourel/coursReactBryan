import { useState } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";


function TaskForm({ isTimerStarted, onSubmit }) {

  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // console.log({
    //   titleValue,
    //   descriptionValue,
    // });
    onSubmit({
      title: titleValue,
      description : descriptionValue,
    });
    if(isTimerStarted) {
      setTitleValue('');
      setDescriptionValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmitForm } >
      <TextField 
        placeholder='Titre de votre têche' 
        labelTitle='Titre' 
        value={ titleValue }
        onChange={ setTitleValue }
      />
      <TextareaField 
        placeholder='Ecrivez votre description ici...' 
        labelTitle='Description' 
        value={ descriptionValue }
        onChange={ setDescriptionValue }
      />
      <Button type='submit' isTimerStarted={ isTimerStarted } />
    </form>
  );
}

export default TaskForm;

