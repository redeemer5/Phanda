package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu")
public class cartModel {
	
	// attributes
	@Id
	@GeneratedValue
	private int mid;
	private String item_name;
	private int item_price;
	
	// setters and getters
	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public int getItem_price() {
		return item_price;
	}

	public void setItem_price(int item_price) {
		this.item_price = item_price;
	}

	
	// constructor
	public cartModel(int mid, String item_name, int item_price) {
		this.mid = mid;
		this.item_name = item_name;
		this.item_price = item_price;
	}
	
	// empty constructor
	public cartModel() {

	}
}
