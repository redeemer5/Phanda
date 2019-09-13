package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stop_places",schema = "phanda")
public class stopsModel {
	
	// attributes
	@Id
	@GeneratedValue
	private int sid;
	private String stops;
	private String address;
	private int did;
	
	// getters n setters
	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getStops() {
		return stops;
	}

	public void setStops(String stops) {
		this.stops = stops;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

		
	// constructor
	public stopsModel(int sid, String stops, String address, int did) {
		this.sid = sid;
		this.stops = stops;
		this.address = address;
		this.did = did;
	}
	
	// empty constructor
	public stopsModel() {

	}
}
