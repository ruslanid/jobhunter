import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";

import {
  AddNoteFormContainer,
  ButtonsContainer,
  ActionButtonContainer,
  LoaderContainer
} from './add-note.styles';

import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';

import {
  toggleAddNoteHidden,
  addNote
} from '../../redux/notes/notes.actions';

import {
  selectIsSaving,
  selectErrorsSaving
} from '../../redux/notes/notes.selectors';

const AddNote = ({dispatch, match, isSaving, errors}) => {

  const [noteDetails, setNoteDetails] = useState({
    title: '',
    text: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    const newNote = {...noteDetails};
    dispatch(addNote(newNote, match.params.jobId));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setNoteDetails({...noteDetails, [name]: value});
  }

  return (
    <AddNoteFormContainer onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="title"
        placeholder="Note Title"
        value={noteDetails.title}
        handleChange={handleChange}
        error={errors.title}
        addNote
        />

      <FormTextarea
        name="text"
        placeholder="Enter Text..."
        value={noteDetails.text}
        handleChange={handleChange}
        maxLength={254}
        error={errors.text}
        addNote
      />

      <ButtonsContainer>
        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<ActionButtonContainer type="submit">Save</ActionButtonContainer>)
        }
        <ActionButtonContainer onClick={() => dispatch(toggleAddNoteHidden(true))}>Cancel</ActionButtonContainer>
      </ButtonsContainer>
    </AddNoteFormContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  isSaving: selectIsSaving,
  errors: selectErrorsSaving
});

export default withRouter(connect(mapStateToProps)(AddNote));