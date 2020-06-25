import NotesActionTypes from './notes.types';
import axios from 'axios';

export const toggleAddNoteHidden = toggleValue => ({
  type: NotesActionTypes.TOGGLE_ADD_NOTE_HIDDEN,
  payload: toggleValue
});

//
// SAVE NOTE (ADD and UPDATE)
//
const saveNoteStart = () => ({
  type: NotesActionTypes.SAVE_NOTE_START
});

const saveNoteSuccess = note => ({
  type: NotesActionTypes.SAVE_NOTE_SUCCESS,
  payload: note
});

const saveNoteFailure = error => ({
  type: NotesActionTypes.SAVE_NOTE_FAILURE,
  payload: error
});

export const addNote = (note, jobId) => {
  return dispatch => {
    dispatch(saveNoteStart());

    axios.post(`/api/jobs/${jobId}/notes`, note)
    .then(res => dispatch(saveNoteSuccess(res.data)))
    .catch(error => dispatch(saveNoteFailure(error.response.data)))
  }
};