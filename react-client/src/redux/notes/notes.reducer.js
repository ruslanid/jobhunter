import NotesActionTypes from './notes.types';

const INITIAL_STATE =  {
  addNoteHidden: true,
  isSaving: false,
  errorsSaving: {}
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesActionTypes.TOGGLE_ADD_NOTE_HIDDEN:
      return {
        ...state,
        addNoteHidden: action.payload
      }
    case NotesActionTypes.SAVE_NOTE_START:
      return {
        ...state,
        isSaving: true
      }
    case NotesActionTypes.SAVE_NOTE_SUCCESS:
      return {
        ...state,
        isSaving: false,
        addNoteHidden: true,
        errorsSaving: {}
      }
    case NotesActionTypes.SAVE_NOTE_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorsSaving: action.payload
      }
    default:
      return state;
  }
};

export default notesReducer;