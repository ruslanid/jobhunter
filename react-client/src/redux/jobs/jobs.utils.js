export const saveJob = (jobs, jobToSave) => {
    const jobExists = jobs.find(job => jobToSave.id === job.id);

    if (jobExists) {
      return jobs.map(job => {
        if (job.id === jobToSave.id) {
          jobToSave.notes = job.notes;
          return jobToSave;
        } else {
          return job;
        }
      });
    } else {
      return [...jobs, {...jobToSave}];
    }
};

export const deleteJob = (jobs, jobId) => {
  return jobs.filter(job => job.id !== jobId);
};

export const saveNoteToJob = (job, noteToSave) => {
  const noteExists = job.notes.find(note => note.id === noteToSave.id);

  if (noteExists) {
    const notes = job.notes.map(note => {
      if (note.id === noteToSave.id) {
        return noteToSave;
      } else {
        return note;
      }
    });
    return {...job, notes: notes}
  } else {
    job.notes.push(noteToSave);
    return job;
  }

};

export const deleteNoteFromJob = (job, noteId) => {
  const newNotesArray = job.notes.filter(note => note.id !== noteId);
  return {...job, notes: newNotesArray};
}