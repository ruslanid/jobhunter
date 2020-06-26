import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";
import Moment from 'moment';

import {
  UpdateNoteFormContainer,
  CreatedDateContainer,
  CreatedLabelContainer,
  LoaderContainer
} from './update-note.styles';

import JobHeader from '../job-header/job-header.component';
import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  selectNote,
  selectErrorsSaving,
  selectIsSaving
} from '../../redux/notes/notes.selectors';
import {updateNote} from '../../redux/notes/notes.actions';

const UpdateNote = ({note, dispatch, history, errors, isSaving}) => {

  const { id, title, text } = note;

  const [noteDetails, setNoteDetails] = useState({
    id, title, text
  });

  const handleSubmit = event => {
    event.preventDefault();
    const editedNote = {...noteDetails};
    dispatch(updateNote(editedNote, note.job.id, history));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setNoteDetails({...noteDetails, [name]: value});
  };

  return (
    <div className="update-note">
      <JobHeader job={note.job} />
      <UpdateNoteFormContainer onSubmit={handleSubmit}>
        <CreatedDateContainer>
          <CreatedLabelContainer>
            Created:&nbsp;
          </CreatedLabelContainer> 
          {Moment(note.createdAt).format('Do MMM h:mm A')}
        </CreatedDateContainer>
        <FormInput
          type="text"
          name="title"
          placeholder="Note Title"
          value={noteDetails.title}
          handleChange={handleChange}
          error={errors.title}
          />

        <FormTextarea
          name="text"
          placeholder="Enter Text..."
          value={noteDetails.text}
          handleChange={handleChange}
          maxLength={254}
          error={errors.text}
        />

        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit">Save Note</CustomButton>)
        }
      </UpdateNoteFormContainer>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  note: selectNote,
  errors: selectErrorsSaving,
  isSaving: selectIsSaving
});

export default withRouter(connect(mapStateToProps)(UpdateNote));