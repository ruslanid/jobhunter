import React, { useEffect, useState } from 'react';
import Bus from '../../Utils/Bus';

import {
  FlashMessageContainer,
  CloseIconContainer,
  MessageContainer
} from './flash-message.styles';

export const FlashMessage = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    Bus.addListener('flash', ({ message, type }) => {
      console.log('here');
      setVisible(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    });
  }, []);

  return (
    visible &&
    <FlashMessageContainer type={type}>
      <MessageContainer>{message}</MessageContainer>
      <CloseIconContainer onClick={() => setVisible(false)}>X</CloseIconContainer>
    </FlashMessageContainer>
  )
};

export default FlashMessage;