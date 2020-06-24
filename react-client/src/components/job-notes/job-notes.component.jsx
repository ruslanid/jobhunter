import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import {
  JobNotesContainer,
  AddNoteButtonContainer
} from './job-notes.styles';
import NoteItem from '../note-item/note-item.component';

const JobNotes = ({notes}) => (
  <JobNotesContainer>
    <AddNoteButtonContainer>
      <CustomButton>Add Note</CustomButton>
    </AddNoteButtonContainer>
    {notes.map(({id, ...otherProps}) => (
      <NoteItem key={id} {...otherProps} />
    ))}
  </JobNotesContainer>
);

export default JobNotes;