import { styled } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export const TitleContainer = styled(DialogTitle)({
  width: '300px',
  'text-align': 'center',
  padding: 0,
  margin: '30px 0 10px'
});

export const ContentContainer = styled(DialogContent)({
  width: '300px',
  'text-align': 'center',
  'font-style': 'italic',
  'margin-bottom': '15px'
});

export const ActionsContainer = styled(DialogActions)({
  display: 'flex',
  'justify-content': 'center',
  'margin-bottom': '30px'
});

export const CancelButtonContainer = styled(Button)({
  'background-color': '#C8C8C8',
  color: 'white',
  width: '100px',

  '&:hover': {
    'background-color': '#999999'
  }
});

export const ConfirmButtonContainer = styled(Button)({
  'background-color': '#D25350',
  color: 'white',
  width: '100px',

  '&:hover': {
    'background-color': '#CD403C'
  }
});