package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "destination")
public class destination {

	// attributes
	@Id
	@GeneratedValue
	private int did;
	private String trip;
	
	
	// getters n setters
	public int getDid() {
		return did;
	}


	public void setDid(int did) {
		this.did = did;
	}


	public String getTrip() {
		return trip;
	}


	public void setTrip(String trip) {
		this.trip = trip;
	}
	
	// constructor

	public destination(int did, String trip) {
		this.did = did;
		this.trip = trip;
	}	
	
	// empty constructor
	
	public destination() {
	
	}

}
