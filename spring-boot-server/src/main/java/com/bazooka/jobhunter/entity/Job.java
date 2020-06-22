package com.bazooka.jobhunter.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Job {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message="Positon can't be blank")
	private String position;
	
	@NotBlank(message="Location can't be blank")
	private String location;
	
	@NotBlank(message="Company can't be blank")
	private String company;
	
	private String category = "Interested";
	
	@Email
	private String email;
	
	@Column(name="phone_number")
	private String phoneNumber;
	
	private String manager;
	
	private String description;
	
	private String link;
	
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column(name="created_at", updatable = false)
	private Date createdAt;
	
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column(name="updated_at")
	private Date updatedAt;
	
	public Job() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	@Override
	public String toString() {
		return "Job [id=" + id + ", position=" + position + ", location=" + location + ", company=" + company
				+ ", category=" + category + ", email=" + email + ", phoneNumber=" + phoneNumber + ", manager="
				+ manager + ", description=" + description + ", link=" + link + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
	}

}
