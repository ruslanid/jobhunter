package com.bazooka.jobhunter.service;

import java.util.List;

import com.bazooka.jobhunter.entity.Job;

public interface JobService {
	
	public List<Job> findAll();
	
	public Job findById(long id);
	
	public Job save(Job job);
	
	public void deleteById(long id);

}
