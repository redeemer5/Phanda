package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")

public class userModel {

	// attributes
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	
	
	private String name;
	private String surname;
	private String cell;
	private String email;
	private String password;
	
	// getters n setters
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getCell() {
		return cell;
	}
	public void setCell(String cell) {
		this.cell = cell;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	// constructor with fields
	public userModel(int uid, String name, String surname, String cell, String email, String password) {
		this.uid = uid;
		this.name = name;
		this.surname = surname;
		this.cell = cell;
		this.email = email;
		this.password = password;
	}
	
	
	public userModel() {

	}
		
}
