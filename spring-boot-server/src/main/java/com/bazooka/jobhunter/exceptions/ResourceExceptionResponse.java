package com.bazooka.jobhunter.exceptions;

public class ResourceExceptionResponse {
	
	private String message;
	
	public ResourceExceptionResponse(String message) {
        this.message = message;
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
