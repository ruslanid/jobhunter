package com.bazooka.jobhunter.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.bazooka.jobhunter.entity.User;

import static com.bazooka.jobhunter.security.SecurityConstants.EXPIRATION_TIME;
import static com.bazooka.jobhunter.security.SecurityConstants.SECRET;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtils {
	
	public String generateToken(Authentication authentication) {
		
		User user = (User) authentication.getPrincipal();
		Date now = new Date(System.currentTimeMillis());
		Date expirationDate = new Date(now.getTime() + EXPIRATION_TIME);
		
		Map<String, Object> claims = new HashMap<>();
		claims.put("id", (Long.toString(user.getId())));
		claims.put("username", user.getUsername());
		claims.put("firstName", user.getFirstName());
		claims.put("lastName", user.getLastName());
		
		return Jwts.builder()
				.setSubject(user.getUsername())
				.setClaims(claims)
				.setIssuedAt(new Date())
				.setExpiration(expirationDate)
				.signWith(SignatureAlgorithm.HS512, SECRET)
				.compact();
	}

}
