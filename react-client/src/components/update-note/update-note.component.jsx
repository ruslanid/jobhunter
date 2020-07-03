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
  LoaderContainer,
  DeleteButtonContainer
} from './update-note.styles';

import BackToLink from '../../components/back-to-link/back-to-link.component';
import JobHeader from '../job-header/job-header.component';
import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  selectNote,
  selectErrorsSaving,
  selectIsSaving,
  selectIsDeleting
} from '../../redux/notes/notes.selectors';
import {
  updateNote,
  deleteNote
} from '../../redux/notes/notes.actions';

const UpdateNote = ({note, dispatch, history, errors, isSaving, isDeleting}) => {

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
      <BackToLink to={`/jobs/${note.job.id}`} destination="Job" />
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
      {
        isDeleting ?
        (<LoaderContainer>
          <MoonLoader size={30} color={"gray"} />
        </LoaderContainer>)
        :
        (<DeleteButtonContainer>
          <CustomButton onClick={() => dispatch(deleteNote(note.job.id, note.id, history))} removeButton>Delete Note</CustomButton>
        </DeleteButtonContainer>)
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  note: selectNote,
  errors: selectErrorsSaving,
  isSaving: selectIsSaving,
  isDeleting: selectIsDeleting
});

export default withRouter(connect(mapStateToProps)(UpdateNote));