import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  JobNotesContainer,
  AddNoteButtonContainer
} from './job-notes.styles';

import CustomButton from '../custom-button/custom-button.component';
import AddNote from '../add-note/add-note.component';
import NoteItem from '../note-item/note-item.component';

import { selectAddNoteHidden } from '../../redux/notes/notes.selectors';
import { toggleAddNoteHidden } from '../../redux/notes/notes.actions';

const JobNotes = ({notes, addNoteHidden, dispatch}) => (
  <JobNotesContainer>
    <AddNoteButtonContainer onClick={() => dispatch(toggleAddNoteHidden(false))}>
      <CustomButton>Add Note</CustomButton>
    </AddNoteButtonContainer>
    {addNoteHidden ? null : <AddNote />}
    {notes.map(note => (
      <NoteItem key={note.id} note={note} />
    ))}
  </JobNotesContainer>
);

const mapStateToProps = createStructuredSelector({
  addNoteHidden: selectAddNoteHidden
})

export default connect(mapStateToProps)(JobNotes);