package com.bazooka.jobhunter.service;

import com.bazooka.jobhunter.entity.Job;

public interface JobService {
	
	public Iterable<Job> findAll(String username);
	
	public Job findById(long id, String username);
	
	public Job save(Job job, String username);
	
	public void deleteById(long id, String username);

}
