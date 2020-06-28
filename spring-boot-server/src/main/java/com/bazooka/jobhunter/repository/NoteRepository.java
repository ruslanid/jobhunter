package com.bazooka.jobhunter.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bazooka.jobhunter.entity.Note;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {
	
	Optional<Note> findByIdAndJobId(Long id, Long jobId);

}