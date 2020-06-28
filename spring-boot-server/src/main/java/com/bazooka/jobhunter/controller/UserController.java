package com.bazooka.jobhunter.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bazooka.jobhunter.entity.User;
import com.bazooka.jobhunter.service.EntityValidationService;
import com.bazooka.jobhunter.service.UserServiceImpl;
import com.bazooka.jobhunter.validator.UserValidator;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private EntityValidationService entityValidationService;
	
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@Autowired
	private UserValidator userValidator;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
		
		userValidator.validate(user, result);
		
		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		} else {	
			user.setId(0);
			userServiceImpl.save(user);
			return ResponseEntity.ok().body("Account created successfully");
		}
	}
	
}