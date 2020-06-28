package com.bazooka.jobhunter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bazooka.jobhunter.entity.User;
import com.bazooka.jobhunter.exceptions.UsernameAlreadyExistsException;
import com.bazooka.jobhunter.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User save(User user) {
		
		try {
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			return userRepository.save(user);
		} catch (Exception e) {
			throw new UsernameAlreadyExistsException("An account with this email already exists");
		}

	}

}