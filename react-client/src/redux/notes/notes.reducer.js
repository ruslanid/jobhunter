import NotesActionTypes from './notes.types';

const INITIAL_STATE =  {
  addNoteHidden: true,
  note: null,
  isSaving: false,
  isDeleting: false,
  errorsSaving: {},
  errorsDeleting: {}
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
    case NotesActionTypes.FETCH_NOTE_START:
      return {
        ...state,
        note: null,
        errorsSaving: {},
        errorsDeleting: {}
      }
    case NotesActionTypes.FETCH_NOTE_SUCCESS:
      return {
        ...state,
        note: action.payload
      }
    case NotesActionTypes.DELETE_NOTE_START:
      return {
        ...state,
        isDeleting: true
      }
    case NotesActionTypes.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        note: null
      }
    case NotesActionTypes.DELETE_NOTE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorsDeleting: action.payload
      }
    default:
      return state;
  }
};

export default notesReducer;