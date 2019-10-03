package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="restaurants")
public class restaurantModel {

	
	// attributes
	@Id
	@GeneratedValue
	private int resid;
	private String restaurant_name;
	private String restaurant_address;
	private String restaurant_phone_number;
	private int sid;
	
	
	// getters n setters

	
	public int getResid() {
		return resid;
	}


	public void setResid(int resid) {
		this.resid = resid;
	}


	public String getRestaurant_name() {
		return restaurant_name;
	}


	public void setRestaurant_name(String restaurant_name) {
		this.restaurant_name = restaurant_name;
	}


	public String getRestaurant_address() {
		return restaurant_address;
	}


	public void setRestaurant_address(String restaurant_address) {
		this.restaurant_address = restaurant_address;
	}


	public String getRestaurant_phone_number() {
		return restaurant_phone_number;
	}


	public void setRestaurant_phone_number(String restaurant_phone_number) {
		this.restaurant_phone_number = restaurant_phone_number;
	}


	public int getSid() {
		return sid;
	}


	public void setSid(int sid) {
		this.sid = sid;
	}
	
	
	
	
	// constructor
	
	



	public restaurantModel(int resid, String restaurant_name, String restaurant_address, String restaurant_phone_number,
			int sid) {
		this.resid = resid;
		this.restaurant_name = restaurant_name;
		this.restaurant_address = restaurant_address;
		this.restaurant_phone_number = restaurant_phone_number;
		this.sid = sid;
	}


	// empty constructor
	public restaurantModel() 
	{

	}
	
	
}
