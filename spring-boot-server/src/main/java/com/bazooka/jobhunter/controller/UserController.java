package com.bazooka.jobhunter.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bazooka.jobhunter.entity.User;
import com.bazooka.jobhunter.payload.JwtResponse;
import com.bazooka.jobhunter.payload.LoginRequest;
import com.bazooka.jobhunter.security.JwtUtils;
import com.bazooka.jobhunter.service.EntityValidationService;
import com.bazooka.jobhunter.service.UserServiceImpl;
import com.bazooka.jobhunter.validator.UserValidator;
import static com.bazooka.jobhunter.security.SecurityConstants.TOKEN_PREFIX;


@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private EntityValidationService entityValidationService;
	
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@Autowired
	private UserValidator userValidator;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtUtils jwtUtils;
	
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
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {

		if (result.hasErrors()) {
			return entityValidationService.validateFields(result);
		}
		
		Authentication authentication = authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(
				loginRequest.getUsername(),
				loginRequest.getPassword()
			)
		);
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = TOKEN_PREFIX + jwtUtils.generateToken(authentication);
		
		return ResponseEntity.ok().body(new JwtResponse(jwt));
	}
}