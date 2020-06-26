import { createSelector } from 'reselect';

const selectNotes = state => state.notes;

export const selectAddNoteHidden = createSelector(
  [selectNotes],
  notes => notes.addNoteHidden
);

export const selectIsSaving = createSelector(
  [selectNotes],
  notes => notes.isSaving
);

export const selectErrorsSaving = createSelector(
  [selectNotes],
  notes => notes.errorsSaving
);

export const selectNote = createSelector(
  [selectNotes],
  notes => notes.note
);

export const selectIsNoteLoaded = createSelector(
  [selectNotes],
  notes => !!notes.note
);