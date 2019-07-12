package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class cartModel {
	
	// attributes
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private int price;
	
	// setters and getters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	// constructor
	public cartModel(int id, String name, int price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
	
	// empty constructor
		public cartModel() {

		}
	
	
	
	
	

}
