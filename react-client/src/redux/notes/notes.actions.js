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

export const updateNote = (note, jobId, history) => {
  return dispatch => {
    dispatch(saveNoteStart());

    axios.put(`/api/jobs/${jobId}/notes`, note)
    .then(res => {
      dispatch(saveNoteSuccess(res.data));
      history.push(`/jobs/${jobId}`);
    })
    .catch(error =>dispatch(saveNoteFailure(error.response.data)))
  }
};

//
// FETCH NOTE
//
const fetchNoteStart = () => ({
  type: NotesActionTypes.FETCH_NOTE_START
});

const fetchNoteSuccess = note => ({
  type: NotesActionTypes.FETCH_NOTE_SUCCESS,
  payload: note
});

export const fetchNote = (jobId, noteId, history) => {
  return dispatch => {
    dispatch(fetchNoteStart());

    axios.get(`/api/jobs/${jobId}/notes/${noteId}`)
    .then(res => dispatch(fetchNoteSuccess(res.data)))
    .catch(error => history.push(`/jobs/${jobId}`))
  }
};

//
// DELETE NOTE
//
const deleteNoteStart = () => ({
  type: NotesActionTypes.DELETE_NOTE_START
});

const deleteNoteSuccess = noteId => ({
  type: NotesActionTypes.DELETE_NOTE_SUCCESS,
  payload: noteId
});

const deleteNoteFailure = error => ({
  type: NotesActionTypes.DELETE_NOTE_FAILURE,
  payload: error
});

export const deleteNote = (jobId, noteId, history) => {
  return dispatch => {
    dispatch(deleteNoteStart());

    axios.delete(`/api/jobs/${jobId}/notes/${noteId}`)
    .then(res => {
      dispatch(deleteNoteSuccess(noteId));
      history.push(`/jobs/${jobId}`);
    })
    .catch(error => dispatch(deleteNoteFailure(error.resonse.data)))
  }
};