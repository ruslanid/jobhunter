package com.bazooka.jobhunter.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class JobExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<JobExceptionResponse> handleException(JobNotFoundException exc) {
		JobExceptionResponse response = new JobExceptionResponse(exc.getMessage());
		return ResponseEntity.badRequest().body(response);
	}

}