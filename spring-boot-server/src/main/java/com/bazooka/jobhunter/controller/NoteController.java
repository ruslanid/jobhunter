package com.bazooka.jobhunter.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bazooka.jobhunter.entity.Note;
import com.bazooka.jobhunter.service.EntityValidationService;
import com.bazooka.jobhunter.service.NoteService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins= "http://localhost:3000")
public class NoteController {
	
	@Autowired
	private NoteService noteService;
	
	@Autowired
	private EntityValidationService entityValidationService;
	
	@GetMapping("/jobs/{jobId}/notes/{noteId}")
	public ResponseEntity<Note> getNoteByIdandJobId(@PathVariable long jobId, @PathVariable long noteId) {
		Note note = noteService.findByIdAndJobId(noteId, jobId);
		return ResponseEntity.ok().body(note);
	}
	
	@PostMapping("/jobs/{jobId}/notes")
	public ResponseEntity<?> addNote(
			@PathVariable long jobId,
			@Valid @RequestBody Note note, BindingResult result) {
		
		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		} else {
			note.setId(0);
			Note savedNote = noteService.save(note, jobId);
			return ResponseEntity.ok().body(savedNote);
		}
	}
	
	@PutMapping("/jobs/{jobId}/notes")
	public ResponseEntity<?> updateNote(
			@PathVariable long jobId,
			@Valid @RequestBody Note note, BindingResult result) {
		
		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		} else {
			Note updatedNote = noteService.save(note, jobId);
			return ResponseEntity.ok().body(updatedNote);
		}
	}
	
	@DeleteMapping("/jobs/{jobId}/notes/{noteId}")
	public ResponseEntity<String> deleteJob(@PathVariable long jobId, @PathVariable long noteId) {
		noteService.delete(noteId, jobId);
		return ResponseEntity.ok().body("Note with id " + noteId + " has been deleted");
	}

}