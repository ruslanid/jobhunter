package com.bazooka.jobhunter.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ResourceExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<ResourceExceptionResponse> handleException(ResourceNotFoundException exc) {
		ResourceExceptionResponse response = new ResourceExceptionResponse(exc.getMessage());
		return ResponseEntity.badRequest().body(response);
	}

}