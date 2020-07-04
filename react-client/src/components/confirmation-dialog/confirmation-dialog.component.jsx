import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import {
  TitleContainer,
  ContentContainer,
  ActionsContainer,
  CancelButtonContainer,
  ConfirmButtonContainer
} from './confirmation-dialog.styles';

const ConfirmDialog = (props) => {
  const { title, open, setOpen, onConfirm } = props;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <TitleContainer id="confirm-dialog">{title}</TitleContainer>
      <ContentContainer>Are you sure?</ContentContainer>
      <ActionsContainer>
        <CancelButtonContainer
          onClick={() => setOpen(false)}
        >
          No
        </CancelButtonContainer>
        <ConfirmButtonContainer
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
        >
          Yes
        </ConfirmButtonContainer>
      </ActionsContainer>
    </Dialog>
  );
};
export default ConfirmDialog;