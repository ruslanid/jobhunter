package com.bazooka.jobhunter.exceptions;

public class JobExceptionResponse {
	
	private String message;
	
	public JobExceptionResponse(String message) {
        this.message = message;
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
