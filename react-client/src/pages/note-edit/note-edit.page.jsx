import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { selectIsNoteLoaded } from '../../redux/notes/notes.selectors';
import { fetchNote } from '../../redux/notes/notes.actions';

import WithLoading from '../../components/with-loading/with-loading.component';
import UpdateNote from '../../components/update-note/update-note.component';

const UpdateNoteWithLoading = WithLoading(UpdateNote);

const NoteEditPage = ({dispatch, history, match, isNoteLoaded}) => {

  const {jobId, noteId} = match.params;

  useEffect(() => {
    dispatch(fetchNote(jobId, noteId, history));
  }, []);
  
  return (
    <div className="note-edit">
      <UpdateNoteWithLoading isLoading={!isNoteLoaded} />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  isNoteLoaded: selectIsNoteLoaded
})

export default connect(mapStateToProps)(NoteEditPage);