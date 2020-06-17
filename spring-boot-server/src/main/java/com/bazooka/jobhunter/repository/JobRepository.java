package com.bazooka.jobhunter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bazooka.jobhunter.entity.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

}
