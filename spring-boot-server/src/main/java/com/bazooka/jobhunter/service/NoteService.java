package com.bazooka.jobhunter.service;

import com.bazooka.jobhunter.entity.Note;

public interface NoteService {
	
	Note findByIdAndJobId(long id, long jobId);

	Note save(Note note, long jobId);

	void delete(long noteId, long jobId);

}
