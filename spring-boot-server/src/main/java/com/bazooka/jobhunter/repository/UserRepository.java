package com.bazooka.jobhunter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bazooka.jobhunter.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}