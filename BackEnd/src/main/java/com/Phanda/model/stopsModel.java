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
	private int spt;
	private String stops;
	private String address;
	private int des;
	
	// getters n setters
	public int getSpt() {
		return spt;
	}

	public void setSpt(int spt) {
		this.spt = spt;
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

	public int getDes() {
		return des;
	}

	public void setDes(int des) {
		this.des = des;
	}

	
	
	// constructor
	
	
	public stopsModel(int spt, String stops, String address, int des) {
		this.spt = spt;
		this.stops = stops;
		this.address = address;
		this.des = des;
	}

	// empty constructor
	public stopsModel() {

	}

		

}
