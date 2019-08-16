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
	private int des;
	private String trip;
	
	// gettes n setters
		
	public int getDes() {
		return des;
	}

	public void setDes(int des) {
		this.des = des;
	}

	public String getTrip() {
		return trip;
	}

	public void setTrip(String trip) {
		this.trip = trip;
	}

	// constructor
	
	public destination(int des, String trip) {
		this.des = des;
		this.trip = trip;
	}

	
	// constructor
		public destination() {

		}
}
