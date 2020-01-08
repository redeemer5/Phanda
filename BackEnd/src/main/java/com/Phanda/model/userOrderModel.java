package com.Phanda.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userorder")
public class userOrderModel {

	@Id
	@GeneratedValue
    private int orid;
	private String date;
    private String name;
    private String surname;
    private String cell;
    private String email;
    private String restuarant;
    private String restuarantno;
    private int orderno;
    private int total;
    
    
	public int getOrid() {
		return orid;
	}
	public void setOrid(int orid) {
		this.orid = orid;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
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
	public String getRestuarant() {
		return restuarant;
	}
	public void setRestuarant(String restuarant) {
		this.restuarant = restuarant;
	}
	public String getRestuarantno() {
		return restuarantno;
	}
	public void setRestuarantno(String restuarantno) {
		this.restuarantno = restuarantno;
	}
	public int getOrderno() {
		return orderno;
	}
	public void setOrderno(int orderno) {
		this.orderno = orderno;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public userOrderModel(int orid, String date, String name, String surname, String cell, String email,
			String restuarant, String restuarantno, int orderno, int total) {
		this.orid = orid;
		this.date = date;
		this.name = name;
		this.surname = surname;
		this.cell = cell;
		this.email = email;
		this.restuarant = restuarant;
		this.restuarantno = restuarantno;
		this.orderno = orderno;
		this.total = total;
	}
    
    
	public userOrderModel() {

	}
}
