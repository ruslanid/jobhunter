package com.bazooka.jobhunter.controller;

import java.util.List;

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

import com.bazooka.jobhunter.entity.Job;
import com.bazooka.jobhunter.service.JobService;
import com.bazooka.jobhunter.service.EntityValidationService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	@Autowired
	private EntityValidationService entityValidationService;
	
	@GetMapping("/jobs")
	public List<Job> getAll() {
		return jobService.findAll();
	}
	
	@GetMapping("/jobs/{jobId}")
	public ResponseEntity<Job> getJobById(@PathVariable long jobId) {
		Job job = jobService.findById(jobId);
		job.getNotes();
		return ResponseEntity.ok().body(job);
	}
	
	@PostMapping("/jobs")
	public ResponseEntity<?> addJob(@Valid @RequestBody Job job, BindingResult result) {
		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		} else {
			job.setId(0);
			Job savedJob = jobService.save(job);
			return ResponseEntity.ok().body(savedJob);
		}
	}

	@PutMapping("/jobs")
	public ResponseEntity<?> updateJob(@Valid @RequestBody Job job, BindingResult result) {
		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		} else {
			Job updatedJob = jobService.save(job);
			return ResponseEntity.ok().body(updatedJob);
		}
	}
	
	@DeleteMapping("/jobs/{jobId}")
	public ResponseEntity<String> deleteJob(@PathVariable long jobId) {
		jobService.deleteById(jobId);
		return ResponseEntity.ok().body("Job with id " + " was deleted.");
	}
}
