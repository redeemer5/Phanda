package com.Phanda.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.Phanda.Repo.cartRepo;
import com.Phanda.Repo.destinationRepo;
import com.Phanda.Repo.stopsRepo;
import com.Phanda.model.cartModel;
import com.Phanda.model.destination;
import com.Phanda.model.stopsModel;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class cartController {
	
	
	@Autowired
	private cartRepo cart;
	
	@Autowired
	private stopsRepo sRepo;
	
	@Autowired
	private destinationRepo dRepo;
	
	// get menu 
	@GetMapping("/getMenu")
	public List<cartModel> getMenu()
	{
		return cart.findAll();
	}
	
	// get stops
	@GetMapping("/stop/{des}")
	public List<stopsModel> getStop(@PathVariable int des)
	{
		return sRepo.findBydes(des);
	}
	
	@GetMapping("/getTrip")
	public List<destination> getTrip()
	{
		return dRepo.findAll();
	}

}
