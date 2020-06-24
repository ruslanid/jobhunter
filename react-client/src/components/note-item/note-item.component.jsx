import React from 'react';
import Moment from 'moment';

import {
  NoteItemContainer,
  TitleContainer,
  TextContainer,
  UpdatedDateContainer
} from './note-item.styles';

const NoteItem = ({title, text, updatedAt}) => (
  <NoteItemContainer>
    <TitleContainer>{title}</TitleContainer>
    <TextContainer>{text}</TextContainer>
    <UpdatedDateContainer>
      {Moment(updatedAt).format('Do MMM h:mm')}
    </UpdatedDateContainer>
  </NoteItemContainer>
);

export default NoteItem;