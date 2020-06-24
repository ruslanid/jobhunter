package com.bazooka.jobhunter.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bazooka.jobhunter.entity.Job;
import com.bazooka.jobhunter.entity.Note;
import com.bazooka.jobhunter.exceptions.ResourceNotFoundException;
import com.bazooka.jobhunter.repository.JobRepository;
import com.bazooka.jobhunter.repository.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService {
	
	@Autowired
	private NoteRepository noteRepository;
	
	@Autowired
	private JobRepository jobRepository;

	@Override
	public Note findByIdAndJobId(long id, long jobId) {
		return findNoteByIdAndJobId(id, jobId);
	}
	
	@Override
	public Note save(Note note, long jobId) {
		Optional<Job> result = jobRepository.findById(jobId);
		
		if (result.isEmpty()) {
			throw new ResourceNotFoundException("Job with id " + jobId + " does not exist");
		}
		
		Job job = result.get();
		note.setJob(job);
		return noteRepository.save(note);
	}

	@Override
	public void delete(long noteId, long jobId) {
		Note note = findNoteByIdAndJobId(noteId, jobId);
		noteRepository.delete(note);
	}
	
	private Note findNoteByIdAndJobId(long id, long jobId) {
		Optional<Note> result = noteRepository.findByIdAndJobId(id, jobId);
		
		if (result.isEmpty()) {
			throw new ResourceNotFoundException("Note with id " + id + " does not exists");
		}
		
		return result.get();
		
	}

}
