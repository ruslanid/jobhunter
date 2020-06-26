import React from 'react';
import {withRouter} from 'react-router-dom';
import Moment from 'moment';

import {
  NoteItemContainer,
  TitleContainer,
  TextContainer,
  UpdatedDateContainer
} from './note-item.styles';

const NoteItem = ({note, history, match}) => (
  <NoteItemContainer onClick={() => history.push(`${match.url}/notes/${note.id}/edit`)}>
    <TitleContainer>{note.title}</TitleContainer>
    <TextContainer>{note.text}</TextContainer>
    <UpdatedDateContainer>
      {Moment(note.updatedAt).format('Do MMM h:mm A')}
    </UpdatedDateContainer>
  </NoteItemContainer>
);

export default withRouter(NoteItem);