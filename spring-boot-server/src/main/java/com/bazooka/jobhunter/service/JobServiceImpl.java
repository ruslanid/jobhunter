package com.bazooka.jobhunter.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bazooka.jobhunter.entity.Job;
import com.bazooka.jobhunter.exceptions.JobNotFoundException;
import com.bazooka.jobhunter.repository.JobRepository;

@Service
public class JobServiceImpl implements JobService {
	
	@Autowired
	private JobRepository jobRepository;

	@Override
	public List<Job> findAll() {
		return jobRepository.findAll();
	}

	@Override
	public Job findById(long id) {
		return findJobById(id);
	}

	@Override
	public Job save(Job job) {
		return jobRepository.save(job);
	}

	@Override
	public void deleteById(long id) {
		Job job = findJobById(id);
		jobRepository.deleteById(id);
	}
	
	private Job findJobById(long id) {
		Optional<Job> result = jobRepository.findById(id);
		
		if (result.isEmpty()) {
			throw new JobNotFoundException("Job with id " + id + " does not exist");
		}
		
		return result.get();
	}

}
